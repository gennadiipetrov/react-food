import Dishes from '../dishes/Dishes';
import Reviews from '../reviews/Reviews';

import './style.css'

const Restaurant = ({prop}) => {
  return !prop 
    ? (<div>No restaurant</div>)
    : (
        <div className="restaurant">
          <h2 className="restaurant__section"> Ресторан - <strong>{prop.name}</strong> </h2>

          <h3 className="restaurant__section"> Меню </h3>
          <Dishes prop={prop.menu}/>

          <h3 className="restaurant__section"> Отзывы </h3>
          <Reviews prop={prop.reviews}/>
        </div>
    );
}

export default Restaurant;