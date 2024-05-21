import Ingredients from './ingredients/Ingredients';
import DishCounter from './dish-counter/DishCounter';

const Dish = ({value}) => {
  return !value
  ? (<div>empty dish</div>)
  : (
      <div>
        <span> 
          <strong>Блюдо\цена:</strong>  
          {value.name}\{value.price} &nbsp; <DishCounter/>
        </span>

        <Ingredients value={value.ingredients}/>
      </div>
    );
}

export default Dish;