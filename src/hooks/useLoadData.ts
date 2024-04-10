import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGlobalData } from "../store/generalSlice";
import useFetch from "./useFetch";

const useLoadData = (): boolean => {
  const { data ,loading:loadingCategory} = useFetch("/Category");
  let [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      data && dispatch(setGlobalData(data || []));
      data && setLoader(false)
    };

    fetchData();
  }, [loadingCategory]);

  return loader;
};

export default useLoadData;
