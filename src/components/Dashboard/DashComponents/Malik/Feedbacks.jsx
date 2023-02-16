import React from "react";
import { Button } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";

const Feedbacks = () => {
  return (
    <>
      <div
        className="main"
        style={{
          height: "85vh",
          marginTop: "15vh",
          width: "72vw",
          marginLeft: "25vw",
        }}
      >
        <div className="container">
          <h5 style={{ color: "white" }}>
            <div className="row">
              <div className="col-12">List of Auto Gemz Feedbacks</div>
              <div className="col-12 mt-3">
                <div className="container card p-2 text-dark">
                  <div className="row gap-4 " style={{ textAlign: "center" }}>
                    
                    <div className="col-2 mt-4">
                      <h6>Email</h6>
                    </div>
                    <div className="col-8 mt-2">
                      <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore expedita excepturi itaque ut nihil recusandae omnis voluptas quod vel nam! Dolores atque totam alias modi! Vitae doloremque sunt quos tenetur!</h6>
                    </div>
                    <div className="col-1 mt-3">
                      <Button
                        className="btn-danger"
                        style={{ height: "2.5rem" }}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
