import { useEffect, useState } from "react";
import "./button1.scss";

interface Button1Props {
  handleClick: () => void;
}

export const Button1 = ({ handleClick }: Button1Props) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {viewportWidth > 605 && (
        <div className="bton1__container">
          <a href="#" className="button1" onClick={handleClick}>
            <span className="bton_1"> Change View</span>
          </a>
        </div>
      )}
    </>
  );
};
