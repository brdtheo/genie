import { Router, RouterView } from "./lib/redux-saga-router";
import routes from "./routes";
import "./assets/style.css";
import HomeLayout from "./ui/layouts/HomeLayout";

function App() {
  return (
    <Router routes={routes}>
      <RouterView name="layout" defaultComponent={HomeLayout} />
    </Router>
  );
}

export default App;
