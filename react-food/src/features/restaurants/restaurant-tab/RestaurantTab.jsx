const RestaurantTab = ({name, onClick}) => {
  return !name 
    ? (<div>No name</div>)
    : (<button onClick={onClick}>{name}</button>);
}

export default RestaurantTab;