import {useState} from 'react'
import Restaurant from './Restaurant';

const Restaurants = ({value}) => {
  const [restaurant, setRestaurant] = useState(value[0]);

  return !value 
    ? (<div>No restaurants</div>)
    : (
      <div>
        {
          value.map(restaurant =>
            <button 
              key={restaurant.id} 
              onClick={()=>setRestaurant(restaurant)}
            >
              {restaurant.name}-{restaurant.id.slice(0, 4)}
            </button>
          )}

          <Restaurant value={restaurant}/>
      </div>
    );
}

export default Restaurants;