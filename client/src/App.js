import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import Impression from "./components/screens/impression";
import Admin from "./components/screens/AdminScreen";
import adminaddplayer from "./components/screens/adminaddplayer";
import adminrecherche from "./components/screens/adminrecherche";
import downloadxls from "./components/screens/downloadxls";
import adminmenu from "./components/screens/adminmenu";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/impression/:id" component={Impression} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/adminaddplayer" component={adminaddplayer} />
          <Route exact path="/adminrecherche" component={adminrecherche} />
          <Route exact path="/downloadxls" component={downloadxls} />
          <Route exact path="/adminmenu" component={adminmenu} />
         
          
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
