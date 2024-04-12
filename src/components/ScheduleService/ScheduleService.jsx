import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import style from "./ScheduleService.module.css";
import { confirmShift } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const ScheduleService = () => {
  const service = useSelector((state) => state.selectedService);
  const shift = useSelector((state) => state.selectedShift);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerConfirm = () => {
    alert(
      `Se ha creado su cita de "${service.name}" a las ${shift.hour}, ${shift.date}`
    );
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div>
        <h2>Confirmar turno</h2>
      </div>
      <div>
        <ProgressBar completed={90} />
      </div>
      <div className={style.containerService}>
        <div>
          <p>Servicio: {service.name}</p>
        </div>
        <div>
          <p>Fecha: {`${shift.date}  ${shift.hour}`}</p>
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(confirmShift(false))}>Anterior</button>
        <button onClick={handlerConfirm}>Confirmar</button>
      </div>
    </div>
  );
};

export default ScheduleService;
