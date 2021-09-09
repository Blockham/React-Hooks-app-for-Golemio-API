import handle from "../../locale/localization";
import React, {useEffect, useState, FunctionComponent} from "react";
import {useAppContext} from "../../AppContext/app.context";
import mapDispatch from "../../reducers/dispatches";
import "./Footer.css";


export const  Footer:FunctionComponent<{}> = () => {
    const {state, dispatch} =useAppContext();
    const [input, SetInput] = useState("");
    const actions = mapDispatch({dispatch: dispatch});
    useEffect(() => {
        SetInput(state.API_KEY);
    },[state.API_KEY]);
    return(
        <footer id="footer">
            <section id="keySection">
                <label>
                    {handle(state.langCode,"api key")}
                </label>
                <input type="text"  value={input } onChange={e => SetInput(e.target.value) } />
                <button id="inputdestroy" type="button" onClick={() => {actions.changeAPIKEY(""); SetInput("")}} >X</button>
                <button id="apiButton" onClick={() => {actions.changeAPIKEY(input)}}>{handle(state.langCode,"use")}</button>
            </section>
            <section id="localizationContainer">
                <button onClick={() => actions.changeLangCode('en')} >EN</button>
                /
                <button  onClick={() => actions.changeLangCode('cz')} >CZ</button>

            </section>
        </footer>
        )
}
export default Footer;
