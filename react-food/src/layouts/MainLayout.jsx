import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

import  ThemeProvider from '../features/theme/ThemeProvider';
import  AuthProvider from '../features/auth/AuthProvider';

import "../../assets/css/main.css";

const MainLayout = ({ children }) =>  {
  return (
        <AuthProvider>
            <div id="modal" style={{ position: "relative", zIndex: 2 }} />
            <div id="popover" style={{ position: "relative", zIndex: 3 }} />
            <div id="tooltip" style={{ position: "relative", zIndex: 4 }} />
            <div style={{ zIndex: 1 }}>
                <ThemeProvider>
                    <Header/>
                        {children}
                    <Footer/>
                </ThemeProvider>
            </div>
        </AuthProvider>
    );
}

export default MainLayout;