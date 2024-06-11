import Ingredients from './ingredients/Ingredients';
import DishCounter from './dish-counter/DishCounter';

import {AuthContext} from '@shared/contexts/AuthContext';
import {useContext} from 'react';
import {useSelector} from 'react-redux';

import { selectDishById } from '../../../../redux/entities/dish/Selectors';

const Dish = ({id}) => {
  const dish = useSelector(state =>selectDishById(state, id));
  const authContext = useContext(AuthContext);

  return !dish
  ? (<div>empty dish</div>)
  : (
      <div>
        <span> 
          <strong>Блюдо\цена:</strong>  
          {dish.name}\{dish.price} &nbsp; { authContext != null ? <DishCounter price={dish.price}/> : null}
        </span>

        <Ingredients dish={dish.ingredients}/>
      </div>
    );
}

export default Dish;