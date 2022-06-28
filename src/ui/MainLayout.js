import { CLEAR, RouterLink, RouterView } from "../lib/redux-saga-router";
import * as L from "../locationTemplates";

function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <RouterView name="main" />
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <RouterLink to={L.Home.home()} mode={CLEAR} exact>
          Home
        </RouterLink>
        <RouterLink to={L.News.news()} mode={CLEAR} exact>
          Search
        </RouterLink>
      </div>
    </div>
  );
}

export default MainLayout;