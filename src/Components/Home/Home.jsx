import React, { useState } from "react";
import "./Home.css";
import Interface from "../Interface/Interface";
import srcImg from "../../images/space.png";

function Home() {
  // eslint-disable-next-line
  const [data, setData] = useState([
    {
      head: "hello World",
      paragraph: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            dicta! Praesentium.`,
    },
    {
      head: "hello World",
      paragraph: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            dicta! Praesentium.`,
    },
    {
      head: "hello World",
      paragraph: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            dicta! Praesentium.`,
    },
  ]);
  return (
    <React.Fragment>
      <div className="home section show" data-index="0">
        <Interface
          title="your next interactive experience"
          srcImg={srcImg}
          btn="hire us"
        />
        <div className="container">
          <div className="boxes">
            {data.map((e, id) => (
              <div key={id} className="box">
                <h2>{e.head}</h2>
                <p>{e.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
