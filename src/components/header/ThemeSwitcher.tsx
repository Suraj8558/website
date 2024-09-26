import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { Sun , MoonStar } from 'lucide-react';

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
    >
      {isDarkMode ? <Sun /> : <MoonStar />} 
    </button>
  );
};

export default ThemeSwitcher;