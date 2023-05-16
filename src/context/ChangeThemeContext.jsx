import { createContext, useReducer } from "react";
import React from "react";

const ThemeContext = createContext();

function ChangeThemeContext({ children }) {
  const ChangeState = (state, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        return { ...state, color: action.payload };
      case "CHANGE_MODE":
        return { ...state, mode: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(ChangeState, {
    color: "aqua",
    mode: false,
  });

  const changeNavColor = (color) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: color,
    });
  };

  const changeMode = () => {
    dispatch({
      type: "CHANGE_MODE",
      payload: state.mode ? false : true,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeNavColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ChangeThemeContext, ThemeContext };
