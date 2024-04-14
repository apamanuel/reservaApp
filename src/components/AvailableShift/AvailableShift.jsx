import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import style from "./AvailableShift.module.css";
import { selectShift } from "../../redux/actions";

const AvailableShift = () => {
  const slots = useSelector((state) => state.slots);
  const service = useSelector((state) => state.selectedService);
  const shift = useSelector((state) => state.selectedShift);
  const dispatch = useDispatch();

  const [selectedShift, setSelectedShift] = useState(null);

  let slotService = [];
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].serviceId === service.id) {
      slotService.push(slots[i]);
    } else {
      return (
        <div className={style.message}>
          <p>Lo sentimos. En este momento no hay disponibilidad</p>
        </div>
      );
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
                const shiftKey = `${slot.date}-${time}`;
                const buttonClass =
                  shiftKey === selectedShift && Object.keys(shift).length != 0
                    ? style.selectedButton
                    : style.button;
                return (
                  <button
                    key={time}
                    className={buttonClass}
                    onClick={() => {
                      dispatch(selectShift({ date: slot.date, hour: time }));
                      setSelectedShift(shiftKey);
                    }}
                  >
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
