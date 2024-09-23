import { useContext } from 'react';
import ThemeContext from './components/theme/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-primary">
          Tailwind CSS Dark Mode with Context API
        </h1>
        <p className="mt-4">Current theme: {theme}</p>
        <button
          onClick={toggleTheme}
          className="bg-blue-600 dark:bg-purple-400 text-white dark:text-secondary p-2 rounded mt-4"
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
