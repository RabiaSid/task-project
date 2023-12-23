import React from "react";
import AppLayout from "../../layout";
import HomeSectionOne from "../../section/section-1-home";
import HomeSectionTwo from "../../section/section-2-home";
import HomeSectionFour from "../../section/section-4-home";
import HomeSectionThree from "../../section/section-3-home";

export default function AppHome() {
  return (
    <AppLayout>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
    </AppLayout>
  );
}
