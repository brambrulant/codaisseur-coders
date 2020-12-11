import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}

        <Route path={`/post/:id`} component={PostPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
