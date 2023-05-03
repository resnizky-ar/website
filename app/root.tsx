import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

import tailwindStylesheetUrl from "~/styles/tailwind.css";
import { getUser } from "~/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  // NOTE: Architect deploys the public directory to /_static/
  { rel: "icon", href: "/_static/favicon.ico" },
];

export const loader = async ({ request }: LoaderArgs) => {
  return null;
  // return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <Outlet />
            {/* <Component previousPathname={previousPathname} {...pageProps} /> */}
          </main>
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
