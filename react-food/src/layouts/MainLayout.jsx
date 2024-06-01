import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

import {useState} from 'react';
import {ThemeSwitcherContext} from '@shared/contexts/ThemeSwitcherContext'
import {AuthContext} from '@shared/contexts/AuthContext'

import "../../assets/css/main.css";

const MainLayout = ({ children }) =>  {
    const [themeValue, setThemeValue] = useState(false);
    const [authValue, setAuthValue] = useState(null);

  return (
        <>
            <AuthContext.Provider value={authValue}>
                <div id="modal" style={{ position: "relative", zIndex: 2 }} />
                <div id="popover" style={{ position: "relative", zIndex: 3 }} />
                <div id="tooltip" style={{ position: "relative", zIndex: 4 }} />
                <div style={{ zIndex: 1 }}>
                    <Header 
                        onToggleTheme={setThemeValue}
                        onSignIn={setAuthValue}
                    />
                        <ThemeSwitcherContext.Provider value={themeValue}>
                            {children}
                        </ThemeSwitcherContext.Provider>
                    <Footer/>
                </div>
            </AuthContext.Provider>
        </>
    );
}

export default MainLayout;