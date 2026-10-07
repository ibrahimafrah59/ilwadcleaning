# Ilwad Cleaning website

The public website at https://ilwadcleaning.com, hosted on Vercel (project `ilwad-cleaning`).

## How it's put together

- `build.js` holds the shared header, menu, footer and styles. It wraps each page in `pages/` with them and writes the finished site to `dist/`.
- `pages/` has one file per page. `index.html` is the home page, including the quote form that saves requests to the Ilwad dashboard's Supabase project.
- `vercel.json` turns on clean links (`/about` instead of `/about.html`).
- `design/` holds the design mockups (Claude Design canvas). They aren't part of the live site.

## Build it yourself

Needs Node.js 22.

```
node build.js
```

The finished pages appear in `dist/`. The logo and owner photo are copied in during the build.

## Making changes

This repository is the master copy. Change files here, then publish, so the different chats and tools always start from the same version.
