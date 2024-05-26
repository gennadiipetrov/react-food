import Dish from './dish/Dish';

const Dishes = ({prop}) => {
  return !prop
  ? (<div>No dishes</div>)
  : (
        <ul>
            {
            prop?.map(dish => 
                <li key={dish.id}>
                    <Dish prop={dish}/>
                </li>
            )
            }
        </ul>
    );
}

export default Dishes;