import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import BuyCar from "../CarStore/BuyCar/BuyCar";

const Home = () => {
  const navigate = useNavigate();
  /**
   * at this point your have complete info of user object
   * from the server including his tokens. You can use it here
   * if this is supposed to be a protected route.
   * Or you can make use of useSelector() RTK hook to get this information
   * anywhere in the components
   */
  // const userInfo = useSelector((state) => state.authSlice);
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // if (token !== userInfo.token) {
  //   /** this is currently working you can see it because of css
  //    * go to {@linkhttp://localhost:3000/} route and inspect the page
  //    * you should be able to see this div being rendered in HTML
  //    * then click login it should show the login form. On successful
  //    * login you will see the home page
  //    */

  //   return (
  //     <div
  //       style={{
  //         // height: "100vh",
  //         // width: "100%",
  //         // color: "white",
  //         // display: "flex",
  //         // justifyContent: "center",
  //         // alignItems: "center",
  //         marginTop: "11vh",
  //       }}
  //     >
  //       <h3>You are not authorized to see this page</h3>
  //     </div>
  //   );
  // }
  const tok = localStorage.getItem("token");
  if (tok) {
    return (
      <div style={{ marginTop: "11vh" }}>
        <BuyCar />
        <Button
          className="btn btn-dark"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
            // window.location.reload(false)
          }}
        >
          Logout
        </Button>
      </div>
    );
  } else if (!tok) {
    return (
      <>
        <h1 style={{ marginTop: "11vh" }}>No Access</h1>
      </>
    );
  }
};

export default Home;
