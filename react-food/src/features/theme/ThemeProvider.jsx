
import {ThemeSwitcherContext} from '@shared/contexts/ThemeSwitcherContext';
import {useState, useMemo} from 'react';

const ThemeContextProvider = ({ children }) => {
    const [themeValue, setThemeValue] = useState(false);

    const contextValue = useMemo(() => (
        {
            themeValue,
            toggleThemeValue: () => setThemeValue(!themeValue) 
        }
    ), [themeValue]);
  
    return (
        <ThemeSwitcherContext.Provider value={contextValue}>
            {children}
        </ThemeSwitcherContext.Provider>
    );
};

export default ThemeContextProvider