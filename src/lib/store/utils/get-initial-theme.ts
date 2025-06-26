export const getInitialTheme = (): 'light' | 'dark' => {
 if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
  localStorage.setItem('theme', 'light');
 }
 return 'light';
};
