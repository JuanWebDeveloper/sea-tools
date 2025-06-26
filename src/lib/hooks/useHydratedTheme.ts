import { useEffect, useState } from 'react';

export function useHydratedTheme(currentTheme: string) {
 const [isHydrated, setIsHydrated] = useState(false);

 useEffect(() => {
  const applyTheme = () => {
   document.documentElement.classList.remove('light-theme', 'dark-theme');
   document.documentElement.classList.add(`${currentTheme}-theme`);
  };

  setIsHydrated(true);
  applyTheme();
 }, [currentTheme]);

 return isHydrated;
}
