import React from "react";
// import "../styles/dashboard.css";

const data = [
  {
    title: "New Cars",
    totalNumber: 50,
    icon: "ri-car-fill",
  },
  {
    title: "Used Cars",
    totalNumber: 100,
    icon: "ri-steering-2-line",
  },
  {
    title: "Users",
    totalNumber: "50k",
    icon: "ri-user-line",
  },
  {
    title: "Feedbacks",
    totalNumber: 1000,
    icon: "ri-feedback-line",
  },
  {
    title: "Rented Out Cars",
    totalNumber: 1000,
    icon: "ri-money-dollar-box-line",
  },
  {
    title: "Cars For Rent",
    totalNumber: 1000,
    icon: "ri-shopping-cart-fill",
  },
];
const SingleCArd = () => {
  return (
    <>
      <div
        className="container main"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15vh",
          height: "85vh",
          width: "71vw",
          marginLeft:"29vw",
        }}
      >
        <div className="container mb-3" style={{marginTop:"-5rem"}}>
          <h2 style={{color:"black", fontWeight:"bold"}}>Welcome Back Admin</h2>
          <h4>Here is an Overview of the Gemz</h4>
        </div>
        <div className="row gap-5">
          {data.map((dat, idx) => {
            return (
              <div
                className="col-3 bg-dark text-light"
                key={idx}
                style={{
                  borderRadius: "1rem",
                  textAlign: "center",
                  padding: "1rem",
                  boxShadow: "0px 0px 1rem 4px grey",
                }}
              >
                <div className="single_card">
                  <span className="card_icon">
                    <i className={dat.icon}></i>
                  </span>
                  <div className="card_content">
                    <h4>{dat.title}</h4>
                    <span>{dat.totalNumber}+</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleCArd;
