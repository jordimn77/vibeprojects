# GeniusReplica Prototype

This repository contains a small demo of **GeniusReplica**, inspired by the Replika experience. It features a React + Tailwind frontend with animated gradients, a basic chat interface and serverless API routes ready for Vercel.

## Local development

```bash
npm install
npm --workspace frontend run dev
npm --workspace backend start
```

## Building

```bash
npm run build
```

The compiled frontend is output to `frontend/dist`. The UI includes an optional dark mode toggle and a simple chat page that calls the serverless API.

## Deploying on Vercel

The repo includes a `vercel.json` configuration so you can deploy directly with Vercel. API routes live in the `api/` folder (`/api/hello`, `/api/respond`) and the static site comes from `frontend/dist`.

1. Push this repo to a new Git repository.
2. Create a project on Vercel and import the repository.
3. Vercel will run `npm run build` and deploy the contents of `frontend/dist`.

After deployment you can visit `/api/hello` or `/api/respond` to verify the API routes are working.

