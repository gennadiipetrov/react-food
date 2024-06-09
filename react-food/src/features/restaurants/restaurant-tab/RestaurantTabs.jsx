import RestaurantTab from './RestaurantTab';
import {useSelector} from 'react-redux';

const RestaurantTabs = ({onTabClick}) => {
  const restaurantsIds = useSelector(state => state.Restaurant.ids);

  return (
    <>
      {
        restaurantsIds.map(id =>
          <RestaurantTab
            key={id}
            id={id}
            onTabClick={onTabClick}
          />
        )
      }
    </>
  );
}

export default RestaurantTabs;