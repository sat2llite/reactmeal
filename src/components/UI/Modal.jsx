//모달 팝업창
import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

//모달뒤 까만 반투명
const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onClose} > </div>
}

//실제 모달(가운데 하얀네모)
const ModalOverlay=(props)=>{
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  )
};


// portal을 출력할 위치를 가져옴
const portalElement = document.getElementById('overlay');

//메인 컴포넌트
const Modal = (props) => {
  return (
    <div>
      {/* {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement )}       */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </div>
  )
}

export default Modal;
//  createPortal(child(자식요소), container(포탈이름))
