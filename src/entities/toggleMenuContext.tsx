// toggleMenuContext.tsx
import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface OpenMenuContextType {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

export const OpenMenuContext = createContext<OpenMenuContextType>({
   isOpen: false,
   setIsOpen: () => { },
});

export const ToggleMenuProvider = ({ children }: { children: ReactNode }): React.ReactElement => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <OpenMenuContext.Provider
         value={{
            isOpen,
            setIsOpen,
         }}
      >
         {children}
      </OpenMenuContext.Provider>
   );
};
