import React, {Dispatch, SetStateAction, useContext, useReducer} from "react";
import appReducer from "../reducers/reducers";
export interface  AppContextInterface  {
    langCode: string,
    API_KEY: string,
    setAPI_KEY: (key:string) => void,
    setLangCode: (code: string) => void,
    handle: (word:string) => string,
    tiles: ITile[],
    modal: {
        isOpen: boolean;
        detailId: string;
        detail: ITile;
    }
}
const InitialState: AppContextInterface = {
    langCode: localStorage.getItem('langCode') || 'cz',
    API_KEY: "",
    setAPI_KEY: key => {},
    setLangCode: code => {},
    handle: word => "",
    tiles: [],
    modal : {
        isOpen: false,
        detailId: "",
        detail: {
            description:"",
            image:{url:""},
            id:"",
            adress: {adress_formatted: "", street_address: "", postal_code: "", adress_locality: "", adress_region: "", adress_country: ""},
            district:"",
            name:"",
            properties: []

        }
    }
}
export interface store {
    state: AppContextInterface,
    dispatch: React.Dispatch<Action>
}


export const AppContext = React.createContext<store>({state:InitialState, dispatch: value => {}});
export const useAppContext = () => useContext(AppContext);


export const AppProvider = ({children} : {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(appReducer,InitialState);
    return (
        <AppContext.Provider value={{state,dispatch}} children={children}/>

    )
}


