import { Suspense } from "react";
import KatalysaApp from "@/components/KatalysaApp";

export default function HomePage() {
  return <Suspense fallback={<main className="loading">Loading Katalysa…</main>}><KatalysaApp/></Suspense>;
}
