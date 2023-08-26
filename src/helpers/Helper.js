
export const shownotif = (setter) => {
  setter(true);
  
  setTimeout(() => {
    setter(false);
  }, 2000); 
}