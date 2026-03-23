# imanagedata

A modern, fluid, modular landing page for an AI product focused on car dealerships.

## Run locally

This project is a static site. Open `index.html` directly in your browser, or run a lightweight local server:

```bash
cd /workspaces/imanagedata
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Files

- `index.html`: page structure and content
- `styles.css`: design system, layout, and responsive styling
- `script.js`: nav interactions, reveal animations, and demo form behavior

## Customize quickly

- Brand name and key messaging: edit hero text in `index.html`
- Colors and visual direction: edit CSS variables in `styles.css` under `:root`
- Demo CTA behavior: edit the handler near the bottom of `script.js`

## Notes

- The form is front-end only and does not send data to a backend.
- Current behavior provides immediate UX feedback and can be connected to your CRM later.