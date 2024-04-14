import { useDispatch, useSelector } from "react-redux";
import style from "./ScheduleService.module.css";
import {
  confirmShift,
  selectShift,
  confirmService,
  selectedService,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Layout from "../../views/Layout";

const ScheduleService = () => {
  const service = useSelector((state) => state.selectedService);
  const shift = useSelector((state) => state.selectedShift);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerConfirm = () => {
    alert(
      `Se ha creado su cita de "${service.name}" a las ${shift.hour}, ${shift.date}`
    );
    dispatch(confirmShift(false));
    dispatch(selectShift({}));
    dispatch(confirmService(false));
    dispatch(selectedService({}));
    navigate("/");
  };
  const handlerBeforeButton = () => {
    dispatch(confirmShift(false));
    dispatch(selectShift({}));
  };

  return (
    <Layout title="Confirmar turno" progress={90}>
      <div className={style.container}>
        <div className={style.containerService}>
          <div>
            <p>Servicio: {service.name}</p>
          </div>
          <div>
            <p>Fecha: {`${shift.date}  ${shift.hour}`}</p>
          </div>
        </div>
        <div className={style.buttonsContainer}>
          <button onClick={handlerBeforeButton} className={style.button}>
            Anterior
          </button>
          <button onClick={handlerConfirm} className={style.button}>
            Confirmar
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ScheduleService;
