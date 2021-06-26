import React from 'react';

const defaultModalContext = {
  fullsize: false,
  toggleFullsize: (url) => undefined,
  currentImageURI: '무야호 '
};

export const ModalContext = React.createContext(
  defaultModalContext
);

export const ModalContextProvider = ({children}) => {
  const toggleFullsize = (imageURI='') => {
    setModalInfo((prevState) => {
      console.log(`${JSON.stringify(prevState, null, 2)}`);
      console.log(`??? ${JSON.stringify(prevState.toggleFullsize, null, 2)}`);
      const nextState = {
        fullsize: prevState.fullsize? false : true,
        toggleFullsize: prevState.toggleFullsize,
        currentImageURI: imageURI,
      };
      return nextState
    });
  }
  const [modalInfo, setModalInfo] = React.useState({
    fullsize: defaultModalContext.fullsize,
    toggleFullsize: toggleFullsize,
    currentImageURI: defaultModalContext.currentImageURI,
  });
  return (
    <ModalContext.Provider value={modalInfo}>{children}</ModalContext.Provider>
  );
}
