import React, { useEffect, useRef, useState } from 'react';
import './Popup.css';
const Popup = (props) => {

    return props.trigger ? (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <img src={props.event[props.index].ImageUrl} alt="" />
                    </div>
                    <div className="card-body">
                            <p className="card-text text-center">{props.event[props.index].Title}</p>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Popup;
