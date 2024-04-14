import MugBlack from "../../assets/cup-of-tea-black.png";
import MugBlue from "../../assets/cup-of-tea-blue.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.mugContainer}>
        <div className={style.mugContainer_image}>
          <img src={MugBlue} alt="MugBlue-icon" className={style.image} />
        </div>
        <div className={style.title}>
          <p style={{ color: "#615CF2" }}>Reservar</p>
        </div>
      </div>
      <div className={style.mugContainer}>
        <div className={style.mugContainer_image}>
          <img src={MugBlack} alt="MugBlack-icon" className={style.image} />
        </div>
        <div className={style.title}>
          <p>Mis turnos</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
