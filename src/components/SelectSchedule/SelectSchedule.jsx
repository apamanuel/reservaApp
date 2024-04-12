import AvailableShift from "../AvailableShift/AvailableShift";
import ProgressBar from "../ProgressBar/ProgressBar";

const SelectSchedule = () => {
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
    </div>
  );
};

export default SelectSchedule;
