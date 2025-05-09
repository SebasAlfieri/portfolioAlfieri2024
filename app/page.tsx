import React, { Suspense } from "react";
import { TopMenu } from "@/components";
import Navigation from "@/components/Navigation";
export default function Home() {
  return (
    <main>
      <TopMenu />
      <Suspense>
        <Navigation />
      </Suspense>
    </main>
  );
}
