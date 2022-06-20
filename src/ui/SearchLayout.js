import { RouterView } from "../lib/redux-saga-router";
import Container from "./components/Container";

function SearchLayout() {
  return (
    <main className="bg-black min-h-screen">
      <Container>
        <RouterView name="main" />
      </Container>
    </main>
  );
}

export default SearchLayout;
