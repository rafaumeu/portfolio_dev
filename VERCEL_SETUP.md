# Vercel Configuration

## Setup Instructions

### Option 1: Vercel CLI (requires authentication)

1. Generate a token: https://vercel.com/account/tokens
2. Login:
   ```bash
   vercel login --token <your-token>
   ```

### Option 2: Vercel Dashboard (recommended)

1. Go to: https://vercel.com/dashboard
2. Select your project: portfolio_dev
3. Navigate to: Settings > Environment Variables
4. Add the variable:
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: `7d5b79e7-fbdf-4c39-81d4-80e0b8161b41`
   - Environments: Production, Preview, Development

### Option 3: Vercel API

Use the Vercel API to add the environment variable:

```bash
curl -X POST https://api.vercel.com/v1/projects/YOUR_PROJECT_ID/env \
  -H "Authorization: Bearer <your-token>" \
  -d '{
    "type": "plain",
    "key": "NEXT_PUBLIC_WEB3FORMS_KEY",
    "value": "7d5b79e7-fbdf-4c39-81d4-80e0b8161b41",
    "target": ["production", "preview", "development"]
  }'
```

## Current Project

- Repository: https://github.com/rafaumeu/portfolio_dev
- Project: portfolio_dev
- Owner: rafas-projects-62f31870

## Testing

After adding the variable:
1. Redeploy the project
2. Test the contact form: https://rafaumeu.github.io/#contact
3. Check email: rafael.zendron22@gmail.com