import { useSelector } from "react-redux";
import style from "./AvailableShift.module.css";

const AvailableShift = () => {
  const slots = useSelector((state) => state.slots);
  const service = useSelector((state) => state.selectedService);
  let slotService = [];
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].serviceId === service) {
      slotService.push(slots[i]);
    }
  }

  return (
    <div className={style.container}>
      {slotService.map((slot) => {
        return (
          <div key={slot.date}>
            <h3>{slot.date}</h3>
            <div className={style.buttonContainer}>
              {slot.availableTimeslots.map((time) => {
                return (
                  <button key={time} className={style.button}>
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableShift;
