import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Bienvenidos</h1>
      </div>
      <div>
        <button onClick={() => navigate("/home")}>AGENDAR CITA</button>
      </div>
    </div>
  );
};

export default Landing;
