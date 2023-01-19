import LOGO from "../assets/netflix/logo.png";
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
    </section>
  );
};
