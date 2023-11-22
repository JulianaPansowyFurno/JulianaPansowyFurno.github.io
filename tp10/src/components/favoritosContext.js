import { createContext, useState } from 'react';

export const favoritoContext = createContext({
  favorito: null,
  setfavorito: () => {},
});

export const FavoritoProvider = ({ children }) => {
  const [favorito, setfavorito] = useState(null);

  return (
    <favoritoContext.Provider value={{ favorito, setfavorito }}>
      {children}
    </favoritoContext.Provider>
  );
};