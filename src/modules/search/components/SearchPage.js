import React from "react";

import Section from "../../../ui/components/Section";
import SearchCardList from "./SearchCard/SearchCardList";
import Container from "../../../ui/components/Container";

function SearchPage() {
  return (
    <Container>
      <Section title="Songs" customStyle="pt-20 md:pt-28 pb-8 sm:pb-16">
        <SearchCardList type="song" />
      </Section>

      <Section title="Artists">
        <SearchCardList type="artist" />
      </Section>
    </Container>
  );
}

export default SearchPage;
