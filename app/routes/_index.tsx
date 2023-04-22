import type { V2_MetaFunction } from "@remix-run/node";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <>
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
    </>
  );
}
