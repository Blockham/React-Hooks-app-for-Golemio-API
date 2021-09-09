import {AppContextInterface} from "../AppContext/app.context";

function appReducer(state: AppContextInterface , action: Action) {
    let ele: HTMLElement | null | undefined;
    switch (action.type) {
        case 'FETCH_TILES':
            return {...state,
            tiles: []};
        case 'FETCH_TILES_COMPLETE':
            return {...state, tiles: action.payload};
        case 'FETCH_MODAL':
            return {
                ...state,
                detailId: action.payload.id,
                modal:{
                    ...state.modal,
                    detail: action.payload
                }
            }
        case 'OPEN_MODAL':
            ele = document.querySelector('#modal-wrapper') as HTMLElement;
            ele.classList.remove('display-none');

            ele = document.querySelector('body') as HTMLElement;
            ele.classList.add('scroll-none');
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: true
                }
            }
        case 'CLOSE_MODAL' :

           ele = document.querySelector('#modal-wrapper') as HTMLElement;
           ele.classList.add('display-none');

           ele = document.querySelector('body') as HTMLElement;
           ele.classList.remove('scroll-none');

            return {
                ...state,
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
        case 'CHANGE_API_KEY':
            return {
                ...state,
                API_KEY: action.payload
            }
        case 'CHANGE_LANG_CODE':
            return {
                ...state,
                langCode: action.payload
            }
        default:
            return state;
    }
}


export default appReducer;
