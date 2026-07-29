# Altus Performance — Marketing Site

Standalone Next.js marketing site for altusperformance.co.za. Fully separate
from the main app repo — different codebase, different Vercel project.

## Setup

```
npm install
npm run dev        # http://localhost:3000
```

## Deploy (Vercel)

1. Push this folder as its own GitHub repo.
2. Import it as a new Vercel project (separate from the main app).
3. Add two environment variables for the contact form to work:
   - `RESEND_API_KEY` — from resend.com (free tier is plenty to start)
   - `CONTACT_TO_EMAIL` — the inbox demo requests should land in
4. Point altusperformance.co.za at this Vercel project once the main app
   has moved to its new domain.

Until the two env vars above are set, the contact form will show a clear
"not configured yet" message instead of silently failing.

## Editing content

Everything lives in `app/page.tsx` — headline, feature list (`FEATURES`
array near the top), founder story, pricing blurb. No CMS, just edit and
redeploy.

Design tokens (colors, fonts) are in `app/globals.css` under `:root` and
`@theme inline` — change a color once there and it updates everywhere.
