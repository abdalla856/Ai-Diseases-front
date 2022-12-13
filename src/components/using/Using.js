import React from "react";
import "./using.css";
const Using = () => {
  return (
    <div className="use">
      <h3>
        EASY <span>TO USE</span>
      </h3>
      <div className="container">
        <div className="card">
          <img src="assets/SELECTING ICON.svg" alt="" />
          <h3>SELECTING</h3>
          <p>Select diseases category first, and find the spesific disease</p>
        </div>
        <div className="card">
          <img src="assets/UPLOADING  ICON.svg" alt="" />
          <h3>UPLOADING</h3>
          <p>
            Prepare the file of imaging process, then upload it to AI DISEASE
          </p>
        </div>
        <div className="card">
          <img src="assets/UPLOADING  ICON.svg" alt="" />
          <h3>SCANNING</h3>
          <p>
            Finally, AI will automatically scan the image and result will appear
            in a few minutes.t
          </p>
        </div>
      </div>
    </div>
  );
};

export default Using;
