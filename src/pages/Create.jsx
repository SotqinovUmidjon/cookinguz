import React, { useEffect, useState } from "react";
import "./Create.css";
import { Navigate, useNavigate } from "react-router-dom";
import { projectFireStore } from "../firebase/config";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMetod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      ingredients,
      method,
      cookingTim: cookingTime + " minuts",
    };

    projectFireStore.collection("recipes").add(obj);
    navigate("/")
    // console.log(obj);
  };

  const handleClick = () => {
    if (ingredients.includes(ingredient)) {
    } else {
      setIngredients((ingredients) => {
        return [...ingredients, ingredient];
      });
    }
    setIngredient("");
  };

  return (
    <div className="create">
      <div>
        <h1 className="createH1">Yangi taom</h1>
        <div className="input">
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Taom nomi:</label>
            <br />
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              name=""
              id=""
            />
            <br />
            <br />
            <label htmlFor="">Kerakli mahsulotlar:</label>
            <br />
            <input
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
              className="input1"
              type="text"
              name=""
              id=""
              value={ingredient}
            />
            <button onClick={handleClick}>Qo'shish</button>
            <h4 className="ingredients" style={{ width: "200px" }}>
              Mahsulotlar:{" "}
              {ingredients.map((item) => {
                return <span>{item}, </span>;
              })}{" "}
            </h4>
            <br />
            <br />

            <label htmlFor="">Tayyorlanish jarayoni:</label>
            <br />
            <textarea
              required
              onChange={(e) => {
                setMetod(e.target.value);
              }}
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <br />
            <br />
            <label htmlFor="">Tayyor bo'lish vaqti:</label>
            <br />
            <input
              required
              onChange={(e) => {
                setCookingTime(e.target.value);
              }}
              type="text"
              name=""
              id=""
            />
            <br />
            <br />
            <div className="btn1">
              <button type="submit">Tayyor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
