import React from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
      style={{ minWidth: "400px" }}
    >
      <div onClick={handleClick} className="ui standard modal visible active">
        <div style={{ fontFamily: "Kelly Slab" }} className="header">
          {props.header}
        </div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modalHook")
  );
};

export default Modal;
