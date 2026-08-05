# AGENTS.md

## Purpose

This file contains durable instructions for working with an AI agent across
projects. Keep it concise, operational, and focused on rules that should remain
useful in future sessions.

This public edition is based on the instructions I currently use. It keeps the
reusable working conventions and omits repository-specific paths and private
storage details.

## Prompt Rewriter

For every user prompt, first rewrite the request internally into a clearer,
more structured task statement before acting.

The rewritten prompt should preserve the user's intent while making the work
easier for an AI agent to execute:

1. Identify the user's goal.
2. Separate required actions from optional context.
3. Make hidden constraints explicit when they are already implied.
4. Preserve all user-provided facts, names, paths, dates, and deliverable
   requirements.
5. Do not invent requirements or change the user's intent.

Act directly on the rewritten prompt. Only show it to the user when doing so
would clarify ambiguity, expose an important assumption, or prevent a likely
mistake.

If rewriting reveals missing information that is genuinely necessary and risky
to assume, ask one concise question. Otherwise, proceed with the best reasonable
assumption.

## Mathematical Notation Formatting

For mathematical notation in user-facing prose:

1. Use `\(...\)` for inline mathematics.
2. Use `\[...\]` for display mathematics, with the opening and closing
   delimiters on their own lines.
3. Do not use dollar signs as math delimiters when the client may render them as
   literal text.
4. Keep each complete mathematical expression inside its delimiters.
5. Do not place mathematics that should render inside code formatting.

These rules apply only to explanatory prose. Preserve the requested syntax for
raw LaTeX, Markdown source, code, filenames, identifiers, currency, and exact
quotations.

## GitHub Sync Policy

Use a separate branch for each distinct task or project. At the end of a task,
preserve useful work in the configured GitHub repository whenever it is safe and
technically possible:

1. Review changed files and exclude unrelated changes.
2. Never commit secrets, credentials, private tokens, or sensitive data.
3. Commit task-related changes with a clear, concise message.
4. Push the branch and leave a short handoff note when future continuation would
   benefit from the context.
5. Report what was synchronized and anything that could not be synchronized.

## Autonomy and Approval

Execute clearly scoped work without asking for extra confirmation. Ordinary
cleanup, formatting, generated artifacts, and dependency lockfile updates do not
need separate approval when they are part of the task.

Notify the user and wait for confirmation before deleting substantial original
source files, research materials, datasets, or drafts that cannot be trivially
regenerated. Never rewrite Git history, force-push, reset, or discard unrelated
changes unless the user explicitly requests it.

## Repository Setup

If the workspace is not a Git repository, preserve the work through an available
GitHub connector or API when possible. When local Git is available and setup is
part of the task:

1. Add an appropriate `.gitignore` before the first commit.
2. Connect the repository to the intended remote rather than assuming a target.
3. If the remote is unavailable, complete the local work and state what access
   or authentication is needed to synchronize it.

## Research Outputs and Large Files

Before committing PDFs, images, datasets, model outputs, or other research
artifacts:

1. Check for confidential, copyrighted, unpublished, or identifying material.
2. Prefer preserving editable source files, scripts, notes, and metadata
   alongside final outputs.
3. Use Git LFS or appropriate external storage when files exceed practical
   repository limits.
