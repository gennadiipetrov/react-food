import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

import {useState} from 'react';
import {ThemeSwitcherContext} from '@shared/contexts/ThemeSwitcherContext'

const MainLayout = ({ children }) =>  {
    const [themeValue, setThemeValue] = useState(false);

  return (
        <div>
            <Header onToggleTheme={(value) => {setThemeValue(value);}}/>
                <ThemeSwitcherContext.Provider value={themeValue}>
                    {children}
                </ThemeSwitcherContext.Provider>
            <Footer/>
        </div>
    );
}

export default MainLayout;