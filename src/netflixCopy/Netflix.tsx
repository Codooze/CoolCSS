import LOGO from "../assets/netflix/logo.png";
import BG from "../assets/netflix/bg.jpg";
import NAME from "../assets/netflix/name.png";
import PLAY from "../assets/netflix/play.png";
import "./netflix.scss";

export const Netflix = () => {
  return (
    <section className="netflix__container">
      <header>
        <a href="" className="logo">
          <img src={LOGO} alt="" />
        </a>
        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Latest</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </header>
      <div className="banner">
        <img src={BG} alt="" className="bg" />
        <div className="content">
          <img src={NAME} alt="" className="movieTitle" />
          <h4>
            <span>2020</span>
            <span>
              <i>12+</i>
            </span>
            <span>1h 55min</span>
            <span>Action</span>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            nostrum dignissimos rerum! Magni, velit deleniti, culpa quas debitis
            aut a consequuntur provident exercitationem quos quibusdam quasi
            sed, hic alias pariatur!
          </p>
          <div className="buttons">
            <a href="#">
              <i className="fa fa-play" aria-hidden="true"></i> Play
            </a>
            <a href="#">
              <i className="fa fa-plus" aria-hidden="true"></i>My List
            </a>
          </div>
        </div>
        <a className="play">
          <img src={PLAY}></img>Watch Trailer
        </a>
      </div>
    </section>
  );
};
