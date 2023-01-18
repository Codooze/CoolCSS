import "./button1.scss";

interface Button1Props {
  handleClick: () => void;
}

export const Button1 = ({ handleClick }: Button1Props) => {
  return (
    <div>
      <a href="#" className="button1" onClick={handleClick}>
        <span>Change View</span>
      </a>
    </div>
  );
};
