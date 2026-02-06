import React from "react";
import LandingHero from "../components/LandingHero";
import { PROFILE } from "../services/siteData";

export default function HomePage() {
  return <LandingHero profile={PROFILE} />;
}
