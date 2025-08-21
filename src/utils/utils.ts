export const checkScreenWidth = (isMenuOpen: boolean) => {
   console.log("window.innerWidth", window.innerWidth)
   if (isMenuOpen && window.innerWidth > 768) {
      return true;
   }
   return false;
};