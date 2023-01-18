import "./button1.scss";

interface Button1Props {
  handleClick: () => void;
}

export const Button1 = ({ handleClick }: Button1Props) => {
  return (
    <div className="bton1__container">
      <a href="#" className="button1" onClick={handleClick}>
        <span className="bton_1"> Change View</span>
      </a>
    </div>
  );
};
