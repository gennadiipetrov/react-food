import ReactDOM from 'react-dom/client'
import MainLayout from './layouts/MainLayout'
import Restaurants from './features/restaurants/Restaurants';
import restaurants from './mock/mock.js'
import ScrollProgressBarForDocument from './shared/scroll-progress-bar/ScrollProgressBarForDocument';

ReactDOM.createRoot(
  document.getElementById('root')).render(
    <>
      <ScrollProgressBarForDocument />
      <MainLayout>
        <Restaurants prop={restaurants} />
      </MainLayout>
    </>
  )
