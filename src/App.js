import { Router, RouterView } from "./lib/redux-saga-router";
import routes from "./routes";
import MainLayout from "./ui/MainLayout";
import './assets/style.css';

function App() {
  return (
    <Router routes={routes}>
      <RouterView name="layout" defaultComponent={MainLayout} />
    </Router>
  );
}

export default App;
