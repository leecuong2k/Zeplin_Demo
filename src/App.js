import { BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact Component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
