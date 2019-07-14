import React, { useReducer, createContext } from 'react';

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const INIIAL_STATE: IState = {
  episodes: [],
  favorites: [],
};

export const partContext = createContext<IState>(INIIAL_STATE);

const fetchReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export default function PartContextProvider({ children }): JSX.Element {
  const [state, dispatch] = useReducer(fetchReducer, INIIAL_STATE);
  return (
    <partContext.Provider value={{ state, dispatch }}>
      {children}
    </partContext.Provider>
  );
}
