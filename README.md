# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions. Follow these steps to set up GitHub Pages for your repository:

1. Go to your repository settings on GitHub
2. Navigate to the "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Ensure the main branch is selected for deployment
5. Uncomment the `base` setting in `vite.config.ts` and replace 'my-resume' with your repository name
6. Push your changes to the main branch

The GitHub Actions workflow will:
- Build your Remix application
- Deploy it to GitHub Pages
- Make it available at `https://yourusername.github.io/repository-name/`

If you want to use a custom domain:
1. Configure your custom domain in the GitHub Pages settings
2. Comment out the `base` path in `vite.config.ts`
3. Add your custom domain to the GitHub Pages settings
