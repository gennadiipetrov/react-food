import Button from '@widgets/button/Button'

const RestaurantTab = ({name, onClick}) => {
  return !name 
    ? (<div>No name</div>)
    : (<Button onClick={onClick} appearance={"button_alternate"}>{name}</Button>);
}

export default RestaurantTab;