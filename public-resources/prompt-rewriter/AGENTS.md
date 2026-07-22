# AGENTS.md

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
