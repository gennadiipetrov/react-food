import Ingredients from './ingredients/Ingredients';
import DishCounter from './dish-counter/DishCounter';

import {AuthContext} from '@shared/contexts/AuthContext';
import {useContext} from 'react';

const Dish = ({prop}) => {

  const authContext = useContext(AuthContext);

  return !prop
  ? (<div>empty dish</div>)
  : (
      <div>
        <span> 
          <strong>Блюдо\цена:</strong>  
          {prop.name}\{prop.price} &nbsp; { authContext != null ? <DishCounter price={prop.price}/> : null}
        </span>

        <Ingredients prop={prop.ingredients}/>
      </div>
    );
}

export default Dish;