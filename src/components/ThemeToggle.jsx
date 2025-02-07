import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-lg z-50"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
