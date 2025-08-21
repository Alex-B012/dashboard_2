// toggleMenuContext.ts
import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// Определяем интерфейс для контекста
interface OpenMenuContextType {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

// Создаем контекст с начальными значениями
export const OpenMenuContext = createContext<OpenMenuContextType>({
   isOpen: false,
   setIsOpen: () => { },
});

// Компонент провайдера с правильной типизацией
export const ToggleMenuProvider = ({ children }: { children: ReactNode }): JSX.Element => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   return (
      <OpenMenuContext.Provider
      value= {{
      isOpen,
         setIsOpen,
      }
}
    >
   { children }
   </OpenMenuContext.Provider>
  );
};
