import Dishes from '../dishes/Dishes';
import Reviews from '../reviews/Reviews';

const Restaurant = ({prop}) => {
  return !prop 
    ? (<div>No restaurant</div>)
    : (
        <div>
          <h2> Ресторан - {prop.name} </h2>

          <h3> Меню </h3>
          <Dishes prop={prop.menu}/>

          <h3> Отзывы </h3>
          <Reviews prop={prop.reviews}/>
        </div>
    );
}

export default Restaurant;