import React from "react";
import "../styles/dashboard.css";

const data = [
  {
    title: "Total Cars",
    totalNumber: 50,
    icon: "ri-police-car-line",
  },
  {
    title: "Daily Trips",
    totalNumber: 100,
    icon: "ri-steering-2-line",
  },
  {
    title: "Total Clients",
    totalNumber: "50k",
    icon: "ri-user-line",
  },
  {
    title: "Kilometers Daily",
    totalNumber: 1000,
    icon: "ri-timer-flash-line",
  },
];
const SingleCArd = () => {
  return (
    <>
      <div className="row gap-2" style={{ marginTop: "5rem" }}>
        {data.map((dat, idx) => {
          return (
            <div
              className="col-3  bg-dark text-light"
              key={idx}
              style={{
                borderRadius: "1rem",
                textAlign: "center",
                padding: "1rem",
                width:"17vw",
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
    </>
  );
};

export default SingleCArd;
