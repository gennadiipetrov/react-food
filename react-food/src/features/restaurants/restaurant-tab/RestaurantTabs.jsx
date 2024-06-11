import RestaurantTab from './RestaurantTab';

const RestaurantTabs = ({onTabClick, restaurants}) => {
  return (
    <>
      {
        restaurants && restaurants.map(r =>
          <RestaurantTab
            key={r.id}
            restaurant={r}
            onTabClick={onTabClick}
          />
        )
      }
    </>
  );
}

export default RestaurantTabs;