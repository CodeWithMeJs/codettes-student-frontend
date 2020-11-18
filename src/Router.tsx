import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CodeInput from "./Pages/CodeInput";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UploadAssignments from "./Pages/UploadAssignments";

function Router() {
  return (
    <div>
      <BrowserRouter>
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
