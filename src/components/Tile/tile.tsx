import React, {FunctionComponent} from 'react';
import './tile.css';
import '../../static/types'
import {useAppContext} from "../../AppContext/app.context";
import handle from "../../locale/localization";
import mapDispatch from "../../reducers/dispatches";


export const Tile:FunctionComponent<tileProps> = ({info}) => {
    const {state, dispatch} = useAppContext();
    const actions = mapDispatch({dispatch});
    return (
        <div className="Tile">
            <h4 id="title">
                {info.name}
            </h4>
            <div id="info">
                <h5>{handle(state.langCode,'description')}</h5>
                <p>
                    {info.description}
                </p>
            </div>
            <button onClick={() => actions.fetchModal(state.API_KEY, info.id)}  >{handle(state.langCode,"learn more")}</button>
        </div>
    )
}
interface tileProps  {
    info: ITile
}
export default Tile;
