import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getServices } from "../../redux/actions";
import SelectService from "../../components/SelectService/SelectService";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return <SelectService />;
};

export default Home;
