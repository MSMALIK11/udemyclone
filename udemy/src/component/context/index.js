import { useEffect } from "react";
import { useReducer, createContext } from "react";
import {} from "../videoscontent.js";
const initialState = {
  user: null,
  courseList: null,
  singleCourse: null,
};
const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "GET_COURSE":
      return { ...state, courseList: action.payload };
    default:
      return state;
  }
};
// context provider

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
    dispatch({
      type: "GET_COURSE",
      payload: JSON.parse(window.localStorage.getItem("courseList")),
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export { Context, Provider };
