import Footer from "./components/Footer";
import { RouterView } from "../lib/redux-saga-router";
import LoadingBar from "./components/LoadingBar";
import { useSelector } from "react-redux";

function HomeLayout() {
  const loading = useSelector((state) => state.homeReducer.loading);

  return (
    <div className="flex flex-col h-screen">
      <main className="bg-black flex flex-grow justify-center items-center">
        {loading && <LoadingBar />}

        <RouterView name="main" />
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
