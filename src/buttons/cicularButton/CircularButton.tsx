import "./circularButton.scss";
import { IonIcon } from "@ionic/react";
import {
  addOutline,
  homeOutline,
  personOutline,
  settingsOutline,
  mailOutline,
  keyOutline,
  videocamOutline,
  gameControllerOutline,
  cameraOutline,
} from "ionicons/icons";
import { useState } from "react";

export default function CircularButton() {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  const rotationAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <section className="circularBtn_Container">
      <div className="circularBtn__inner__container">
        <div
          onClick={toggleBtn}
          className={
            !toggle ? "circularBtn__toggle" : "circularBtn__toggle active"
          }
        >
          <IonIcon icon={addOutline} style={{ color: "black" }} />
        </div>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[0]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#">
            <IonIcon icon={homeOutline} />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[1]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#">
            <IonIcon
              icon={personOutline}
              style={{ transform: `rotate(-${rotationAngles[1]}deg)` }}
            />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[2]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#" style={{ transform: `rotate(-${rotationAngles[2]}deg)` }}>
            <IonIcon icon={settingsOutline} />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[3]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#" style={{ transform: `rotate(-${rotationAngles[3]}deg)` }}>
            <IonIcon icon={mailOutline} />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[4]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#" style={{ transform: `rotate(-${rotationAngles[4]}deg)` }}>
            <IonIcon icon={keyOutline} />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[5]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#" style={{ transform: `rotate(-${rotationAngles[5]}deg)` }}>
            <IonIcon icon={videocamOutline} />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[6]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#" style={{ transform: `rotate(-${rotationAngles[6]}deg)` }}>
            <IonIcon icon={gameControllerOutline} />
          </a>
        </li>
        <li
          style={{
            transform: toggle
              ? `rotate(${rotationAngles[7]}deg)`
              : "translateX(90px)",
          }}
        >
          <a href="#" style={{ transform: `rotate(-${rotationAngles[7]}deg)` }}>
            <IonIcon icon={cameraOutline} />
          </a>
        </li>
      </div>
    </section>
  );
}
