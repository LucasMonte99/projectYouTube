import React, { createContext, useState, useContext, ReactNode } from 'react';


interface MenuContextType {
  openMenu: boolean;
  setOpenMenu: (isOpen: boolean) => void; 
}


const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
        <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </MenuContext.Provider>
    );
};


export const MenuComponent = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('Error');
  }

  const { openMenu, setOpenMenu } = context;

  return (
    <div>
      <p>O menu está {openMenu ? 'aberto' : 'fechado'}</p>
      <button onClick={() => setOpenMenu(true)}>Abrir Menu</button>
      <button onClick={() => setOpenMenu(false)}>Fechar Menu</button>
    </div>
  );
};


export const App = () => (
  <MenuProvider>
    <MenuComponent />
  </MenuProvider>
);

export default App;


    
    
