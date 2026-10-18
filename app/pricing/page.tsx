import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Katalysa",
  description: "Compare Katalysa school plans by student enrolment, with annual and per-term pricing.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
