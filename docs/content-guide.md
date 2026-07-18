# Content update guide

The site separates facts from presentation. For normal updates, edit `_data` files instead of touching layouts or CSS.

## Update the profile

Open `_data/profile.yml` and change only the value after each label. Multi-line paragraphs use `>-`; keep the following lines indented by two spaces.

## Add a research project

Copy an existing block in `_data/research.yml`, then update every field:

```yaml
- number: "03"
  title: A concise project title
  status: Working paper
  featured: true
  summary: >-
    A two- or three-sentence plain-language description of the question,
    method, or setting.
  themes:
    - Theme one
    - Theme two
```

Keep project numbers unique and in display order.

## Add a news item

Add the newest entry to the top of `_data/news.yml`:

```yaml
- date: "2026.07"
  text: A concise update with enough context to make sense on its own.
```

## Publish a field note

Create `_posts/YYYY-MM-DD-short-title.md` with the front matter shown in the main README. Use Markdown for headings, links, lists, and images. Store note images under `assets/images/writing/` and reference them as `/assets/images/writing/filename.jpg`.

## Before publishing

1. Check names, dates, links, and project status.
2. Preview both a wide and narrow browser window.
3. Confirm the light and dark color themes are readable.
4. Avoid committing private data, draft results, or copyrighted files that should not be public.
