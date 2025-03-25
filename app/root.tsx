import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect } from "react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Function to get theme from cookie or user preference
export const loader: LoaderFunction = async () => {
  return json({
    theme: 'dark', // Always dark theme
  });
};

// GitHub Pages redirect handler
function GitHubPagesRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we have redirect parameters from our 404.html
    const url = new URL(window.location.href);
    const path = url.searchParams.get('path');
    const query = url.searchParams.get('query');
    const hash = url.searchParams.get('hash');

    // If we have a path parameter, we should redirect
    if (path && location.pathname === '/') {
      // Clean the URL (to remove the redirect parameters)
      window.history.replaceState(null, '', path + (query || '') + (hash || ''));

      // Navigate to the correct route with Remix
      navigate(path + (query || ''), { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-dark-900 text-dark-100 transition-colors duration-200">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <GitHubPagesRedirect />
      <Outlet />
    </>
  );
}
