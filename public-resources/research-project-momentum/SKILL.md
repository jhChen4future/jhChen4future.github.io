---
name: research-project-momentum
description: Use this skill when continuing, deepening, auditing, troubleshooting, reframing, or planning a substantial research project after prior work exists. Apply it for literature reviews, theory, hypotheses, experiments, measurement, empirical or causal analysis, data/code work, robustness checks, interpretation, paper writing, and next-step planning. Treat prior output as project state to audit, identify the current bottleneck, require meaningful information gain, and leave an updated project state. Trigger even for terse prompts like "continue", "go deeper", "make progress", "trace this", "improve the model", or "what next" when they follow substantial research work; avoid it for isolated facts, minor copyedits, or one-step calculations.
---

# Research Project Momentum

Preserve depth and forward motion across long research projects. Prevent project degradation: later turns becoming smaller, more anchored, or more cosmetic after an initially strong pass.

## Core Rule

Treat prior work as state, not authority. Reuse validated facts, files, code, and decisions, but re-open assumptions, frames, mechanisms, and plans when they have not been stress-tested.

Each substantive use must change at least one project-state element:

- research question or scope;
- conceptual framework or mechanism;
- evidence base or source confidence;
- identification, design, model, method, or data pipeline;
- interpretation or claim strength;
- next-stage decision or confidence level;
- reusable artifact, ledger, test, outline, or handoff.

If the only delta is "more material was added", continue diagnosing or narrow the claim before finalizing.

## Workflow

Scale the workflow to the request. A short "continue" after a large project can require the full cycle; a narrow writing or debugging request can use a compressed version.

1. Reconstruct state.
   Identify the objective, current question, completed work, usable artifacts, important claims, decisions, unresolved questions, constraints, and failed paths. Do not ask the user to repeat available context. For persistent state, use `assets/project-state-template.md` or `scripts/project_state.py`.

2. Classify the stage.
   Pick one primary operation: `Audit`, `Explore`, `Resolve`, `Build`, `Test`, `Interpret`, `Integrate`, `Reframe`, or `Plan`. Use a secondary operation only when it supports the primary one.

3. Diagnose the bottleneck.
   Choose the constraint whose resolution would most improve the project, especially one that threatens validity, blocks downstream work, or can change a decision. Read `references/bottleneck-taxonomy.md` when the visible request may not be the true blocker.

4. Set a stage contract.
   Define the starting state, objective, required operations, progress criterion, failure criterion, and expected output state. For large stages, use `assets/stage-contract-template.md`.

5. Create independent branches.
   Consider at least two genuinely different routes for substantial stages, such as current-frame extension versus independent rebuild, confirmatory test versus falsification test, theory branch versus measurement branch, or primary-source evidence versus adjacent-field evidence.

6. Execute with a ledger.
   Track material claims, sources, derivations, tests, code paths, confidence, implication, decisions changed, and next dependencies. Use `assets/progress-ledger.csv` when the project is long or evidence-heavy.

7. Apply the progress gate.
   Before finalizing, read `references/progress-gates.md` for major stages and verify that the work changed state, tested an inherited assumption, considered independent branches, improved a decision, and left a reusable artifact or state update.

8. Hand off the delta.
   End major stages with a compact update: bottleneck addressed, new findings or work completed, what changed, what remains uncertain, decision now justified, and highest-value next stage. Use `assets/handoff-template.md` when context is long or a fresh conversation would reduce anchoring.

## Reference Routing

Load only the reference needed for the current bottleneck:

- `references/literature-and-theory.md`: literature maps, rival vocabularies, theory reconstruction, source hierarchy, frontier or replication searches.
- `references/empirical-and-causal.md`: estimands, identification, variable construction, robustness, model diagnostics, causal claim strength.
- `references/experiments-and-measurement.md`: construct validity, mechanisms, belief/preference/strategy separation, manipulation checks, power, treatment contamination.
- `references/computation-and-code.md`: reproducibility, debugging, data transformations, tests, synthetic recovery, pipeline validation.
- `references/writing-and-synthesis.md`: contribution audit, claim-evidence alignment, outline rebuilds, reviewer-style reads.
- `references/bottleneck-taxonomy.md`: nontrivial blocker diagnosis.
- `references/progress-gates.md`: validation before delivering major continuations.

## Domain Rules

- Literature work must change boundaries, mechanisms, evidence weight, or research questions; more papers alone are not progress.
- Empirical work must distinguish fit, inference, identification, measurement, and interpretation; do not mechanically add models or controls.
- Experimental work must separate constructs, beliefs, preferences, incentives, strategy, comprehension, and observed behavior.
- Code work is an executable research claim; reproduce first, isolate the smallest uncertain component, then extend.
- Writing must align claims with evidence; do not polish an overclaimed contribution.

## Logged-In Web Access

When a research task needs internet sources that require an account, login session, subscription access, institutional access, or existing browser state, use the Chrome plugin (`Chrome:control-chrome`, `[@chrome](plugin://chrome@openai-bundled)`) to operate the user's browser directly when available. Prefer this over asking the user to paste credentials, exporting cookies, or relying on unauthenticated browsing. Keep browser actions scoped to the research task, avoid account-setting or payment changes unless explicitly requested, and cite or record the accessed source in the project ledger or handoff.

## Interaction Pattern

For substantial work, briefly tell the user:

- the selected stage operation;
- the bottleneck being addressed;
- what would count as real progress.

Share discoveries that invalidate or narrow prior work. Avoid narrating low-level tool use. Do not ask for confirmation when enough context exists to proceed; infer a best-effort stage contract and move.

## Compact Commands

Recognize these user commands:

- `/state`: reconstruct project state.
- `/bottleneck`: diagnose the highest-leverage blocker.
- `/audit`: stress-test prior work.
- `/branch`: generate independent routes.
- `/reframe`: rebuild the question or framework.
- `/test`: design or execute decisive checks.
- `/integrate`: synthesize fragmented findings.
- `/delta`: report only what changed.
- `/handoff`: prepare a clean continuation package.
- `/next`: choose the highest-value next stage.

## Boundaries

This skill orchestrates continuity and quality. It does not replace domain methods, source verification, statistics, safety rules, coding practices, or tool-specific skills. Load domain and tool skills as needed.
