import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getServices, getSlots } from "../../redux/actions";
import SelectService from "../../components/SelectService/SelectService";
import SelectSchedule from "../../components/SelectSchedule/SelectSchedule";

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

  return (
    <div>
      {confirmedService === true ? <SelectSchedule /> : <SelectService />}
    </div>
  );
};

export default Home;
