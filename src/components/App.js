import React, { useState } from "react";
import { useHistory, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function MyComponent() {
  // Define the isLoggedIn state and its setter function
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // Perform login logic...
    setIsLoggedIn(true);
    // Redirect the user to the home page after successful login
    history.push("/home");
  };

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          {/* Pass the handleLogin function as a prop to the Login component */}
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/">
          {/* Pass the isLoggedIn state as a prop to the Home component */}
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default MyComponent;
