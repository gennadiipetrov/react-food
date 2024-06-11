import MainLayout from './layouts/MainLayout'
import Restaurants from './features/restaurants/Restaurants';
import ScrollProgressBarForDocument from './shared/scroll-progress-bar/ScrollProgressBarForDocument';

export const App = () => {
  return (
    <>
        <ScrollProgressBarForDocument />
        <MainLayout>
        <main className="preview">
            <div className="preview__box">
                <Restaurants />
            </div>
        </main>
        </MainLayout>
    </>
  );
};