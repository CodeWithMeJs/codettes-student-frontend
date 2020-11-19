import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar";
import CodeInput from "./Pages/CodeInput";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UploadAssignments from "./Pages/UploadAssignments";

function Router() {
  return (
    <div>
      <BrowserRouter>
        {(window.location.pathname.split("/")[1] === "home" ||
          window.location.pathname.split("/")[1] === "blackboard" ||
          window.location.pathname.split("/")[1] === "upload-assignment") && (
          <Navbar />
        )}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/code-input">
            <CodeInput />
          </Route>
          <Route path="/upload-assignment">
            <UploadAssignments />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
