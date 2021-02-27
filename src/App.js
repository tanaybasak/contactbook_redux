import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <div className="container">
              <div className="py-3">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contacts/add" component={AddContact} />
                  <Route
                    exact
                    path="/contacts/edit/:id"
                    component={EditContact}
                  />
                </Switch>
              </div>
            </div>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
