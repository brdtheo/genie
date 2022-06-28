import { RouterView } from "../../lib/redux-saga-router";

function SearchLayout() {
  return (
    <main className="bg-black min-h-screen">
      <RouterView name="main" />
    </main>
  );
}

export default SearchLayout;
