import Registration from "components/Registration";
import HomepageLayout from "layouts/HomepageLayout";
import MainLayout from "layouts/MainLayout";
import Homepage from "pages/Homepage";
import { Route, Switch } from "react-router";
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
