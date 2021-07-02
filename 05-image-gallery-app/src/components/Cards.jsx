import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const petition = async () => {
    const key = "client_id=fCWR5zHIvG0ChCzK64ygBpBLhNWHxzI72H1uceEKS2k";
    let route = `https://api.unsplash.com/photos/?${key}`;
    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${input}&${key}`;
    }

    const request = await fetch(route);
    const data = await request.json();
    /* Otra forma de hacer el fetch
    fetch(route)
      .then((res) => res.json())
      .then((data) => setImages(data));
    */
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  };

  useEffect(() => {
    petition();
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Para evitar que recarge el componente
    const text = e.target[0].value;
    setInput(text);
  };
  console.log(images);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>
            Buscar:{" "}
            <input name="inputText" type="text" class="form-control-lg" />
          </label>
        </div>
      </form>
      <hr />
      {images.map((img) => {
        return <Card key={img.key} img={img.urls.regular} />;
      })}
    </>
  );
};

export default Cards;
