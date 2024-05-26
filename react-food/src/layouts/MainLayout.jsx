import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';

const MainLayout = ({ children }) =>  {
  return (
            <div>
                <Header/>
                    {children}
                <Footer/>
            </div>
        );
}

export default MainLayout;