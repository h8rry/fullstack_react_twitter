import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import Stats from "./components/stats";
import Myposts from "./components/myposts";

class Myfeeds extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Stats />
            </div>
            <div className="col-9">
              <Myposts />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Myfeeds />,
    document.body.appendChild(document.createElement("div"))
  );
});
