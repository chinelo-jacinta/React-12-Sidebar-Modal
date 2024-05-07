import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);
  // functions
  const openSideBar = () => {
    setisSideBarOpen(true);
  };
  const closeSideBar = () => {
    setisSideBarOpen(false);
  };
  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openSideBar,
        closeSideBar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
