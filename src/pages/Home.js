import React from "react";
import banner from "../assets/banner.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>DELICIOUS FOOD AT ONE CLICK.</p>

        <Link to="/">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
