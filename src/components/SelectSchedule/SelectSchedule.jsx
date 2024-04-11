import AvailableShift from "../AvailableShift/AvailableShift";
import ProgressBar from "../ProgressBar/ProgressBar";

const SelectSchedule = () => {
  return (
    <div>
      <div>
        <h1>Seleccionar horario</h1>
      </div>
      <div>
        <ProgressBar completed={60} />
      </div>
      <div>
        <AvailableShift />
      </div>
    </div>
  );
};

export default SelectSchedule;
