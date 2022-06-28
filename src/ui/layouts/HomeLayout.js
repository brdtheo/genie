import { useSelector } from "react-redux";

import Footer from "../components/Footer";
import { RouterView } from "../../lib/redux-saga-router";
import LoadingBar from "../../modules/home/components/LoadingBar";

function HomeLayout() {
  const loading = useSelector((state) => state.search.loading);

  return (
    <div data-testid="home-layout">
      {loading && <LoadingBar />}

      <div className="flex flex-col min-safe-h-screen">
        <main className="bg-black flex flex-grow justify-center items-center">
          <RouterView name="main" />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
