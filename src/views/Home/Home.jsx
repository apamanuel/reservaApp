import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getServices, getSlots } from "../../redux/actions";
import SelectService from "../../components/SelectService/SelectService";
import SelectSchedule from "../../components/SelectSchedule/SelectSchedule";
import ScheduleService from "../../components/ScheduleService/ScheduleService";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSlots());
  }, [dispatch]);

  const confirmedService = useSelector((state) => state.confirmedService);
  const confirmedShift = useSelector((state) => state.confirmedShift);

  return (
    <div>
      {confirmedService === true ? (
        confirmedShift === true ? (
          <ScheduleService />
        ) : (
          <SelectSchedule />
        )
      ) : (
        <SelectService />
      )}
    </div>
  );
};

export default Home;
