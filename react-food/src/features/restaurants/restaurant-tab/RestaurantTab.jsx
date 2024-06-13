import Button from '@widgets/button/Button'

const RestaurantTab = ({restaurant, onTabClick}) => {

  return !restaurant.name 
    ? (<div>No restaurant name</div>)
    : (<Button onClick={() => onTabClick(restaurant)}>{restaurant.name}</Button>);
}

export default RestaurantTab;