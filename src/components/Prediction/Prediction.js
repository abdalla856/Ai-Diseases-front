import React, { useState, useEffect } from "react";
import "./prediction.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPredition } from "../../actions/ai";
const Prediction = () => {
  const [file, setFile] = useState(null);
  const [img, setImage] = useState(null);
  const [disease, setDisease] = useState(null);
  const [datapre, setPre] = useState({});
  const [name, setName] = useState(null);

  

  const dispatch = useDispatch();

  const handelChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0])
  };

  function getprediction() {
 
    console.log(file  )
    let formData = new FormData(); 
    formData.append('image' ,img)
    formData.append('diseases' ,disease.target.value)
    // console.log(formData['image'])
    dispatch(getPredition(formData));
    setName(img.name)
 
  }
  const data = useSelector((state) => state.Ai);

  return (
    <div className="prediction">
      <div className="container">
        <div className="predictionLeft">
          <div className="circle"></div>
          <p className="desc">
            In Collaboration Universiti Teknologi Malaysia with Saudi German
            Hospital Cairo for <span>Diseases Prediction</span>
          </p>
          <ul className="icons">
            <li>
              <img src="assets/image3.png" alt="" />
            </li>
            <li>
              <img src="assets/image4.png" alt="" />
            </li>
            <li>
              <img src="assets/CATEGORY IVF.svg" alt="" />
            </li>
          </ul>
          <div className="select">
            <select id="select" onChange={setDisease}>
              <option selected disabled>
                choose disease
              </option>
              <option value="brain">Brain</option>
              <option value="lungs">Lungs</option>
              <option value="embrio">Embrio</option>
            </select>
            <span className="focus"></span>
          </div>
          <div className="inputWraper">
            <input className="file" type="file" onChange={handelChange} />
          </div>
          <button onClick={getprediction}>AI Prediction</button>

          <div className="predictionBottom">
            <p>Name: <span>{name || ''}</span></p>
            <p>Prediction: <span>{data.prediction || ''}</span> </p>
            <p>Accuracy: <span>{data.accuracy || ''}</span>%</p>
          </div>
        </div>
        <div className="predictionRight">
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
          <div className="imageBox">
            {file ? (
              <img src={file} alt="" className="uploadedImg" />
            ) : (
              <h3 style={{ fontSize: "50px" }}>No image</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
