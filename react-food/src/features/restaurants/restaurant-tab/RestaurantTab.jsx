import Button from '@widgets/button/Button'
import {useSelector} from 'react-redux';

const RestaurantTab = ({id, onTabClick}) => {
  const restaurant = useSelector(
    (state) => Object.values(state.Restaurant.entities).find(value => value.id === id)
  );

  return !restaurant.name 
    ? (<div>No restaurant name</div>)
    : (<Button onClick={() => onTabClick(restaurant.id)}>{restaurant.name}</Button>);
}

export default RestaurantTab;