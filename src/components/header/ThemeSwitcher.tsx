import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      Switch to {isDarkMode ? 'light' : 'dark'} mode
    </button>
  );
};

export default ThemeSwitcher;