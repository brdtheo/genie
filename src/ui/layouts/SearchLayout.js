import { RouterView } from "../../lib/redux-saga-router";
import Header from "../../modules/search/components/Header";

function SearchLayout() {
  return (
    <>
      <Header />

      <main className="bg-black min-h-screen">
        <RouterView name="main" />
      </main>
    </>
  );
}

export default SearchLayout;
