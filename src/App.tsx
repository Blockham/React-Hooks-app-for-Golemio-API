import React, {useContext, useEffect, useState, FunctionComponent} from 'react';
import './App.css';
import Tile from "./components/Tile/tile";
import  './static/types';
import ModalWrapper from "./components/Modal/modal";
import   './static/urls';
import {URLs} from "./static/urls";
import {AppContext, useAppContext} from "./AppContext/app.context";
import mapDispatch from "./reducers/dispatches";
import handle from "./locale/localization";

export const App:FunctionComponent<{}> = () => {
    const {state,dispatch} = useAppContext();
    const actions = mapDispatch({dispatch: dispatch});
    useEffect(() => {
        actions.fetchTiles(state.API_KEY);
    }, [state.API_KEY])
  return (
    <div className="App">
      <nav>
          <h2>{handle(state.langCode,"title")}</h2>
      </nav>
        <div id="tile-container">
            {state.tiles.map((tile) => <Tile key={tile.id} info = {tile} />)}
        </div>
        <ModalWrapper />
    </div>
  );
}

export default App;
