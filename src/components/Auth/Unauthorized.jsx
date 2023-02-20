import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div
      className="main bg-dark d-flex"
      style={{
        height: "100vh",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textTransform: "uppercase", color: "white" }}>
        You Don't have Access
      </h2>
      <h3 style={{ textTransform: "uppercase", color: "white" }}>
        Go to <Link to={"/login"}>Login</Link> Page
      </h3>
    </div>
  );
};

export default Unauthorized;
