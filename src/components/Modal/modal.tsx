import React, {useContext, useEffect, useReducer, useState, FunctionComponent} from "react";
import ReactDOM from 'react-dom';
import './modal.css';
import {AppContext, useAppContext} from "../../AppContext/app.context";
import Property from './property';
import {URLs} from "../../static/urls";
import mapDispatch from "../../reducers/dispatches";


export const Modal:FunctionComponent<{}> = () => {
    const {state,dispatch} = useContext(AppContext);
    const action = mapDispatch({dispatch});
    if (!state.modal.isOpen) {
        return null;
    }
    return (
            <div id="Modal">
                <section id="hero-image">
                    <img src={state.modal.detail.image.url} id="Hero"/>
                </section>

                <section id="info-modal">
                    <button id="closeButton" type="button" onClick={() => action.closeModal()} >
                        <svg fill="#000000"  viewBox="0 0 24 24" width="18px" height="18px">
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
                        </svg>
                    </button>
                    <p>{state.modal.detail.description}</p>
                    <div id="properties">
                        {state.modal.detail.properties.map(prop => {
                            return (
                                <Property value={prop.value.toString()} description={prop.description} />
                            )
                        })}
                    </div>
                </section>
            </div>
    )}
function ModalWrapper() {
    return ReactDOM.createPortal(<Modal />,document.querySelector("#modal-wrapper") as Element)
}
export default ModalWrapper;
