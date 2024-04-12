import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Bienvenidos</h1>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={() => navigate("/home")}>
          Agendar una Cita
        </button>
      </div>
    </div>
  );
};

export default Landing;
