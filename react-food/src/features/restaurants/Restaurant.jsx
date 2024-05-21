import Dishes from './dishes/Dishes';
import Reviews from './reviews/Reviews';

const Restaurant = ({value}) => {
  return !value 
    ? (<div>No restaurant</div>)
    : (
        <div>
          <h2> Ресторан - {value.name} </h2>

          <h3> Меню </h3>
          <Dishes value={value.menu}/>

          <h3> Отзывы </h3>
          <Reviews value={value.reviews}/>
        </div>
    );
}

export default Restaurant;