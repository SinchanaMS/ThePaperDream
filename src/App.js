import { ToastContainer } from "react-toastify";
import { Header } from "./components/components";
import Router from "./router/Router";
import "./App.css";

function App() {
  return (
    <div>
      <Header/>
      <Router/>
      <ToastContainer/>
    </div>
  );
}

export default App;
