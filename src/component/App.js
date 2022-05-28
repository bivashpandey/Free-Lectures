/**
 * @author: Bivash Pandey
 */

import "../styles/App.css";
import Header from "./Header.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import data from "../data.js";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("Home");

  function handleClick(newCategory) {
    setCategory(newCategory);
  }

  // filter data based on the topics/category
  const filteredCard = data.map((item) => {
    if (category === "Home" || item.category === category) {
      return item;
    }
    return null;
  });

  // generate cards for the selected lecture
  const cards = filteredCard.map((item) => {
    return item && <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      <section className="topics-list">
        <button
          type="button"
          className="topic--button"
          onClick={() => handleClick("Home")}
        >
          <i className="fa fa-home"></i>
        </button>

        <button
          type="button"
          className="topic--button"
          onClick={() => handleClick("Computer Vision")}
        >
          Computer Vision
        </button>

        <button
          type="button"
          className="topic--button"
          onClick={() => handleClick("Deep Learning")}
        >
          Deep Learning
        </button>

        <button
          type="button"
          className="topic--button"
          onClick={() => handleClick("Math")}
        >
          Math
        </button>

        <button
          type="button"
          className="topic--button"
          onClick={() => handleClick("Robotics")}
        >
          Robotics
        </button>
      </section>
      <section className="card-list">{cards}</section>

      <Footer />
    </div>
  );
}

export default App;
