import React from "react";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import SingleCArd from "./SingleCArd";

const Layout = () => {
  return (
    <>
      <div className="main" style={{height:"100vh",width:"100%"}}>
        <div className="row">
          <div className="col-12">
            <TopNav />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <SingleCArd />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
