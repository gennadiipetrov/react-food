import Button from '@widgets/button/Button'

import './style.css'

export const Rating = ({ defaultValue = 1, onClick, MAX }) => {
  return (
    <div className='rating__buttons'>
      {
        ([...Array(MAX)]).map((_, index) => 
          <Button 
              key={index}
              onClick = {() => onClick(index+1)}
              small={true}
            >
            {index+1}
          </Button>
        )
      }
    </div>
  );
};

export default Rating;