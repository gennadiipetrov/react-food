import Dish from './dish/Dish';

const Dishes = ({value}) => {
  return !value
  ? (<div>No dishes</div>)
  : (
        <ul>
            {
            value?.map(dish => 
                <li key={dish.id}>
                    <Dish value={dish}/>
                </li>
            )
            }
        </ul>
    );
}

export default Dishes;