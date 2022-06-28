import React from "react";

import Container from "../../../ui/components/Container";
import Header from "../../../ui/components/Header";
import Section from "../../../ui/components/Section";

function NotFound() {
  return (
    <>
      <Header />

      <Container>
        <Section title="Not found" customStyle="pt-20 md:pt-28 pb-8 sm:pb-16">
          <p className="text-white text-sm mt-4">
            The page you requested does not exist
          </p>
        </Section>
      </Container>
    </>
  );
}

export default NotFound;
