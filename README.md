# Jinghao Chen - Academic Homepage

A custom, data-driven academic homepage built with Jekyll and hosted on GitHub Pages. The design borrows the clarity of academicpages while keeping the visual system lighter, warmer, and more personal.

## The quick-edit map

Most updates only require editing a small YAML file:

| What to update | File |
| --- | --- |
| Bio, links, affiliation, interests | `_data/profile.yml` |
| Research projects | `_data/research.yml` |
| News | `_data/news.yml` |
| Navigation | `_data/navigation.yml` |
| Homepage structure | `index.html` |
| Research page | `publications.html` |
| Writing page | `writing.html` |
| Colors and layout | `assets/css/site.css` |

See [`docs/content-guide.md`](docs/content-guide.md) for examples and a safe update checklist.

## Add a field note

Create a file in `_posts` named `YYYY-MM-DD-short-title.md`:

```yaml
---
layout: post
title: "Your title"
description: "One sentence shown on the writing page."
---

Write the note in Markdown here.
```

The note will automatically appear on `/writing/` after GitHub Pages rebuilds the site.

## Local preview

With Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Publishing

The production site is served from the repository's GitHub Pages configuration. Merge reviewed changes into the configured publishing branch and GitHub Pages will rebuild the site.

## Open the page editor

Open `/editor/` directly on the published site to browse the homepage, Research, and Writing pages in one place. It is a separate, unlisted route: the personal homepage does not embed it or link to it. Describe a change in natural language and use the generated brief as the next message to Codex.

The editor is intentionally client-only and marked `noindex`: it does not modify the repository or send requests to an AI service. It packages the current site context and the requested change into a reviewable handoff.
