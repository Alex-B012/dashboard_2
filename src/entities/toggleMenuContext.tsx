// toggleMenuContext.tsx
import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface OpenMenuContextType {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
   theme: string;
   setTheme: (value: string) => void;
}

export const OpenMenuContext = createContext<OpenMenuContextType>({
   isOpen: false,
   setIsOpen: () => { },
   theme: 'light',
   setTheme: () => { },
});

export const ToggleMenuProvider = ({ children }: { children: ReactNode }): React.ReactElement => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [theme, setTheme] = useState('light');

   return (
      <OpenMenuContext.Provider
         value={{
            isOpen, setIsOpen,
            theme, setTheme
         }}
      >
         {children}
      </OpenMenuContext.Provider>
   );
};
