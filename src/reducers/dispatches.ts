import {URLs} from "../static/urls";
import React from "react";

const mapDispatch = ({dispatch} : {dispatch: React.Dispatch<Action>}) => ({
    openModal: () => dispatch({ type: 'OPEN_MODAL' }),
    fetchModal: (key: string, id: string) =>{
        fetch( key.length > 0 ? URLs.GARDEN_URL + id : URLs.GARDEN_MOCK_URL + id,
            {method:"GET",
                headers: new Headers({
                    "x-access-token":key,
                    "Content-Type": "application/json; charset=utf-8"
                })}
        )
            .then(res => res.json())
            .then(response => {
                let  detail: ITile = {
                    adress:response.properties.adress,
                    description: response.properties.description,
                    district:response.properties.district,
                    id: response.properties.id,
                    image : response.properties.image,
                    name: response.properties.name,
                    properties: response.properties.properties,
                };

                dispatch({type: 'FETCH_MODAL', payload: detail})
                dispatch({type:'OPEN_MODAL'})
            })
            .catch(error => {
                console.log(error);
            });

    },
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
    fetchTiles: (API_KEY: string) => {
        dispatch({type: 'FETCH_TILES'})
        let tiles: ITile[] = [];
        fetch(API_KEY.length > 0  ? URLs.PRODUCTION_URL : URLs.MOCK_URL,
            {method:"GET",
                headers: new Headers({
                    "x-access-token":API_KEY,
                    "Content-Type": "application/json; charset=utf-8"
                })}
        )
            .then(res => res.json())
            .then(response => {

                Object.keys(response.features).forEach(function (key) {
                    tiles = [...tiles,{
                        adress:response.features[key].properties.address,
                        description: response.features[key].properties.description,
                        district:response.features[key].properties.district,
                        id: response.features[key].properties.id,
                        image : response.features[key].properties.image,
                        name: response.features[key].properties.name,
                        properties: response.features[key].properties.properties,
                    }];
                })
                dispatch({type: 'FETCH_TILES_COMPLETE', payload: tiles})
            })
            .catch(error => console.log(error));

    },
    changeAPIKEY: (key:string) => dispatch({type: "CHANGE_API_KEY", payload: key}),
    changeLangCode: (code: string) => dispatch({type:"CHANGE_LANG_CODE", payload: code})
})
export default mapDispatch;
