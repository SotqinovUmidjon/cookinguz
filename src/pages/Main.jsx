import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectFireStore } from "../firebase/config";

function Main() {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

 const [like, setLike] = useState(0)
  const clickLike = ()=>{
    setLike(like+1)
  }

  useEffect(()=>{
    setIsPending(true)
    projectFireStore.collection("recipes").onSnapshot((data)=>{
      const result = []
      data.docs.map((item)=>{
      result.push({...item.data(), id: item.id});
    });
    setData(result)
    setIsPending(false)

    if(result.length == 0){
      setError(true)
    }
    })
  }, [])

  const deleteEl = (id)=>{
    projectFireStore.collection("recipes").doc(id).delete();
  }

  return (
    <div className="Main">
      <div className="card">
        {isPending && <h1 className="loader"><img style={{width: "350px"}} src="./img/loader.gif" alt="" /></h1>}
        {data &&
          data.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div className="trash">
                  <h1>{item.title}</h1>
                  <i onClick={()=>{
                    deleteEl(item.id)
                  }} class="fa-solid fa-trash"></i>
                </div>
                <p>Cooking Times 30 minuts ⏰</p>
                <p>metod: {item.method.substr(0, 100)}...</p>
                <div className="read">
                  <Link to={`/recipe/${item.id}`}>Ko'proq o'qish</Link>
                </div> <br />
                  <div className="btnLike">
                  <button onClick={clickLike}>❤️</button> 
                  <span>{like}</span>
                  </div>
              </div>
            );
          })}
      </div>
      {error && <div className="error">Ma'lumot yo'q</div>}
    </div>
  );
}

export default Main;
