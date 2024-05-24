import Ingredients from './ingredients/Ingredients';
import DishCounter from './dish-counter/DishCounter';

const Dish = ({prop}) => {
  return !prop
  ? (<div>empty dish</div>)
  : (
      <div>
        <span> 
          <strong>Блюдо\цена:</strong>  
          {prop.name}\{prop.price} &nbsp; <DishCounter/>
        </span>

        <Ingredients prop={prop.ingredients}/>
      </div>
    );
}

export default Dish;