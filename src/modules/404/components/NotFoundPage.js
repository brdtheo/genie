import React from "react";

import Container from "../../../ui/components/Container";
import Section from "../../../ui/components/Section";

function NotFoundPage() {
  return (
    <Container>
      <Section title="Not found" customStyle="pt-20 md:pt-28 pb-8 sm:pb-16">
        <p className="text-white text-sm mt-4" data-testid="not-found-message">
          The page you requested does not exist
        </p>
      </Section>
    </Container>
  );
}

export default NotFoundPage;
