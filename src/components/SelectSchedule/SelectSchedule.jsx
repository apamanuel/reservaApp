import AvailableShift from "../AvailableShift/AvailableShift";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShift,
  confirmService,
  selectedService,
} from "../../redux/actions";

const SelectSchedule = () => {
  const dispatch = useDispatch();
  const selectedShift = useSelector((state) => state.selectedShift);

  const handlerBeforeButton = () => {
    if (Object.keys(selectedShift).length != 0) {
      dispatch(selectShift({}));
    } else {
      dispatch(confirmService(false));
      dispatch(selectedService(""));
    }
  };
  return (
    <div>
      <div>
        <h2>Seleccionar horario</h2>
      </div>
      <div>
        <ProgressBar completed={60} />
      </div>
      <div>
        <AvailableShift />
      </div>
      <div>
        <button onClick={handlerBeforeButton}>Anterior</button>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default SelectSchedule;
