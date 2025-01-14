import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isAddMatchesOpen, setIsAddMatchesOpen] = useState(false);
  const [isAddPlayerOpen, setIsAddPlayerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMatchesOpen, setIsEditMatchesOpen] = useState(false);
  const [isEditPlayerOpen, setIsEditPlayerOpen] = useState(false);
  const [isEditTeamOpen, setIsEditTeamOpen] = useState(false);


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

  const openEditMatches = () => {
    setIsEditMatchesOpen(true);
  };
  const closeEditMatches = () => {
    setIsEditMatchesOpen(false);
  };

  const openEditPlayer = () => {
    setIsEditPlayerOpen(true);
  };

  const closeEditPlayer = () => {
    setIsEditPlayerOpen(false);
  };

   const openEditTeam = () => {
    setIsEditTeamOpen(true);
  };

  const closeEditTeam = () => {
    setIsEditTeamOpen(false);
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
        closeAddPlayer,
        isEditMatchesOpen,
        isEditPlayerOpen,
        isEditTeamOpen,
        openEditMatches,
        closeEditMatches,
        openEditPlayer,
        closeEditPlayer,
        openEditTeam,
        closeEditTeam,

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