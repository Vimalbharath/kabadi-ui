import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isAddMatchesOpen, setIsAddMatchesOpen] = useState(false);
  const [isAddPlayerOpen, setIsAddPlayerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAddMatches = () => {
    setIsAddMatchesOpen(true);
  };
  const closeAddMatches = () => {
    setIsAddMatchesOpen(false);
  };

  const openAddPlayer = () => {
    setIsAddPlayerOpen(true);
  };

  const closeAddPlayer = () => {
    setIsAddPlayerOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isAddMatchesOpen,
        isModalOpen,
        openModal,
        closeModal,
        openAddMatches,
        closeAddMatches,
        isAddPlayerOpen,
        openAddPlayer,
        closeAddPlayer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };