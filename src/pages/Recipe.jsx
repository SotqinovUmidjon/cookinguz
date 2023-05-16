import React, { useEffect, useState } from "react";
import useFetch from "../components/hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { projectFireStore } from "../firebase/config";

function Recipe() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(()=>{
    setIsPending(true)
    projectFireStore.collection("recipes").doc(id).get().then((doc)=>{
      setData(doc.data());
    setIsPending(false)
    })
  },[])
  
  return (
    <div>
      <div className="card">
      {isPending && <h1 className="loader1">Yuklanmoqda...</h1>}
        {data && (
          <div className="box recipe_box">
            <div className="trash">
              <h1>{data.title}</h1>
            </div>
            <p>
              <b>Cooking Times</b> : {data.cookingTime}⏰
            </p>
            <div className="metod">
              <p>
                <b>Metod</b>: {data.method}
              </p>
              <p>
                <b>ingredients</b>: {data.ingredients}
              </p>
            </div>
            <div className="read read-box">
              <Link to="/">Sahifani yopish</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
