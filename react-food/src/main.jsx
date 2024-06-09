import ReactDOM from 'react-dom/client'
import MainLayout from './layouts/MainLayout'
import Restaurants from './features/restaurants/Restaurants';
import ScrollProgressBarForDocument from './shared/scroll-progress-bar/ScrollProgressBarForDocument';
import {Provider} from 'react-redux';
import {store} from './redux'

ReactDOM.createRoot(
  document.getElementById('root')).render(
    <Provider store={store}>
      <ScrollProgressBarForDocument />
      <MainLayout>
        <main className="preview">
            <div className="preview__box">
                <Restaurants />
            </div>
        </main>
      </MainLayout>
    </Provider>
  )
