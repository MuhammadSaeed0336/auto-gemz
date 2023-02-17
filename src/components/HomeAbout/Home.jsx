import React from "react";
import BuyCar from "../CarStore/BuyCar/BuyCar";
import { useLoginUserMutation } from "../../features/auth/authSlice";

const Home = () => {
  const [_, { data }] = useLoginUserMutation({ fixedCacheKey: "token-info" });
  // debugger
  return (
    <div style={{ marginTop: "11vh" }}>
      <BuyCar />
    </div>
  );
};

export default Home;
