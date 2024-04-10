import { useEffect, useState } from "react";
import { getStorage } from "../utils/storage";
const initialState = {
  isLoggedIn: false,
  user: undefined,
};

export const useAuth = () => {
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    const user = getStorage("user");
    const isLoggedIn =  user?.token ? true : false;
    setUser({ ...user, isLoggedIn });
  }, []);

  return user;
};
