import Dish from './dish/Dish';
import './style.css';

const Dishes = ({prop}) => {
  return !prop
  ? (<div>No dishes</div>)
  : (
        <ul className='dishes'>
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