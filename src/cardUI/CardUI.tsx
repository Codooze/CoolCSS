import React, { useEffect } from "react";
import "./cardUI.scss";
import creativity from "../../src/assets/creativity.png";
import coding from "../../src/assets/coding.png";
import rokect from "../../src/assets/rocket.png";

export const CardUI = () => {
  return (
    <section className="cardUI__container">
      <div className="inner__container">
        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={creativity} alt="icon" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem assumenda nisi accusantium totam adipisci
                consequuntur, corporis blanditiis perspiciatis.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={coding} alt="icon" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem assumenda nisi accusantium totam adipisci
                consequuntur, corporis blanditiis perspiciatis.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={rokect} alt="icon" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem assumenda nisi accusantium totam adipisci
                consequuntur, corporis blanditiis perspiciatis.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
