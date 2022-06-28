import { RouterView } from "../../lib/redux-saga-router";
import Header from "../../modules/search/components/Header";

function SearchLayout() {
  return (
    <div data-testid="search-layout">
      <Header />

      <main className="bg-black min-h-screen">
        <RouterView name="main" />
      </main>
    </div>
  );
}

export default SearchLayout;
