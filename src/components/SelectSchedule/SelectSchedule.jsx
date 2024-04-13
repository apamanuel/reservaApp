import AvailableShift from "../AvailableShift/AvailableShift";
import Layout from "../../views/Layout";
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

  const handlerBeforeButton = () => {
    if (Object.keys(selectedShift).length != 0) {
      dispatch(selectShift({}));
    } else {
      dispatch(confirmService(false));
      dispatch(selectedService({}));
    }
  };

  const handlerNextButton = () => {
    if (Object.keys(selectedShift).length != 0) {
      dispatch(confirmShift(true));
    }
  };

  return (
    <Layout title="Seleccionar horario" progress={60}>
      <div>
        <div>
          <AvailableShift />
        </div>
        <div>
          <button onClick={handlerBeforeButton}>Anterior</button>
          <button onClick={handlerNextButton}>Siguiente</button>
        </div>
      </div>
    </Layout>
  );
};

export default SelectSchedule;
