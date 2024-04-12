import AvailableShift from "../AvailableShift/AvailableShift";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShift,
  confirmService,
  selectedService,
  confirmShift,
} from "../../redux/actions";

const SelectSchedule = () => {
  const dispatch = useDispatch();
  const selectedShift = useSelector((state) => state.selectedShift);
  const confirm = useSelector((state) => state.confirmedShift);
  console.log(confirm);

  const handlerBeforeButton = () => {
    if (Object.keys(selectedShift).length != 0) {
      dispatch(selectShift({}));
    } else {
      dispatch(confirmService(false));
      dispatch(selectedService(""));
    }
  };

  const handlerNextButton = () => {
    if (Object.keys(selectedShift).length != 0) {
      dispatch(confirmShift(true));
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
        <button onClick={handlerNextButton}>Siguiente</button>
      </div>
    </div>
  );
};

export default SelectSchedule;
