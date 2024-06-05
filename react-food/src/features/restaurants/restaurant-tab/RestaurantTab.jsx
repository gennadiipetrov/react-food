import Button from '@widgets/button/Button'

const RestaurantTab = ({name, onClick}) => {
  return !name 
    ? (<div>No name</div>)
    : (<Button onClick={onClick}>{name}</Button>);
}

export default RestaurantTab;