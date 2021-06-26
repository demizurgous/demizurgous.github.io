import React from 'react'
import {ModalContext} from '../context/context'

const Modal = () => {
  const {fullsize, toggleFullsize, currentImageURI} = React.useContext(ModalContext)
  const ref = React.useRef()
  console.log(`fullsize : ${fullsize}`);

  const handle = (e) => {
        e.stopPropagation();
        console.log('modal !!! clicked!!!')
        console.log(`toggleFullsize : ${toggleFullsize}`);
        toggleFullsize()
  }

  // const top = React.createRef(0);
  // const left = React.createRef(0);
  // const x = React.createRef(0);
  // const y = React.createRef(0);
  // const isOnMove = React.createRef(false);

  // function OnMouseDown(event){
  //     top.current = ref.current.scrollTop;
  //     left.current = ref.current.scrollLeft;
  //     x.current = event.clientX;
  //     y.current = event.clientY;
  //     isOnMove.current = true;
  //     console.log('??????');
  //     console.log(isOnMove.current);
  // }

  // function OnMouseMove(event){
  //     if (isOnMove.current) {
  //       const nextLeft = (left.current + event.clientX - x.current) + 'px';
  //       const nextTop = (top.current + event.clientY - y.current) + 'px';
  //       console.log(`뭐지 왜 안되지 ${isOnMove.current} ${nextLeft} ${nextTop}`);

  //       ref.current.scrollLeft = nextLeft;
  //       ref.current.scrollTop = nextTop;
  //     }
  // }

  // function OnMouseUp(event){
  //     top.current = 0;
  //     left.current = 0;
  //     isOnMove.current = false;
  // }

  // return ( 
  //   <div draggable={true} ref={ref} className={`modal ${fullsize? 'fullsize': 'notvisible'}`} style={{cursor: 'grab'
  //   }} onMouseDown={OnMouseDown} onMouseUp={OnMouseUp} onMouseMove={OnMouseMove} >
  //     <img className={``} src={currentImageURI} alt="" onClick={handle} />
  //   </div>
  // )
  return ( 
    <div draggable={true} ref={ref} className={`modal ${fullsize? 'fullsize': 'notvisible'}`} >
      <img className={``} src={currentImageURI} alt="" onClick={handle} />
    </div>
  )
}

export default Modal
