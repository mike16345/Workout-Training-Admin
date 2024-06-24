import "./App.css";
import SideNav from "./components/SideNav";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="flex flex-row-reverse">
      <SideNav />
      <HomePage />
    </div>
  );
}

export default App;
