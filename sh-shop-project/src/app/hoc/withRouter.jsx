import React from "react";
import { Router } from "react-router-dom";
import history from "../utils/history";

const withRouter =
  (Component) =>
  ({ ...props }) => {
    return (
      <Router history={history}>
        <Component {...props} />
      </Router>
    );
  };

export default withRouter;
