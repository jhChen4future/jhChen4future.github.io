#!/usr/bin/env python3
"""Initialize or validate a machine-readable research project state.

Usage:
  python scripts/project_state.py init project-state.json
  python scripts/project_state.py validate project-state.json
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

REQUIRED = {
    "project_objective": str,
    "research_question": str,
    "completed_work": list,
    "artifacts": list,
    "claims": list,
    "decisions": list,
    "current_bottleneck": str,
    "open_questions": list,
    "failed_paths": list,
    "next_stage": str,
}

TEMPLATE = {
    "project_objective": "",
    "research_question": "",
    "completed_work": [],
    "artifacts": [],
    "claims": [],
    "decisions": [],
    "current_bottleneck": "",
    "open_questions": [],
    "failed_paths": [],
    "next_stage": "",
}


def init(path: Path) -> int:
    if path.exists():
        print(f"Refusing to overwrite existing file: {path}", file=sys.stderr)
        return 2
    path.write_text(json.dumps(TEMPLATE, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Initialized {path}")
    return 0


def validate(path: Path) -> int:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        print(f"File not found: {path}", file=sys.stderr)
        return 2
    except json.JSONDecodeError as exc:
        print(f"Invalid JSON: {exc}", file=sys.stderr)
        return 2

    errors: list[str] = []
    for key, expected_type in REQUIRED.items():
        if key not in data:
            errors.append(f"missing key: {key}")
        elif not isinstance(data[key], expected_type):
            errors.append(f"{key}: expected {expected_type.__name__}, got {type(data[key]).__name__}")

    unknown = sorted(set(data) - set(REQUIRED))
    if unknown:
        print("Warning: unknown keys: " + ", ".join(unknown), file=sys.stderr)

    if errors:
        for error in errors:
            print("ERROR: " + error, file=sys.stderr)
        return 1

    print(f"Valid project state: {path}")
    return 0


def main() -> int:
    if len(sys.argv) != 3 or sys.argv[1] not in {"init", "validate"}:
        print(__doc__.strip(), file=sys.stderr)
        return 2
    command, raw_path = sys.argv[1], sys.argv[2]
    path = Path(raw_path)
    return init(path) if command == "init" else validate(path)


if __name__ == "__main__":
    raise SystemExit(main())
