import ReactDOM from 'react-dom/client'
import MainLayout from './layouts/MainLayout'
import Restaurants from './features/restaurants/Restaurants';
import restaurants from './mock/mock.js'

ReactDOM.createRoot(
  document.getElementById('root')).render(
    <MainLayout>
        <Restaurants prop={restaurants}/>
    </MainLayout>
  )
