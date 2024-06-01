import Button from '@widgets/button/Button'

export const Rating = ({ defaultValue = 1, onClick, MAX }) => {
  return (
    <div>
      {
        ([...Array(MAX)]).map((_, index) => 
          <Button 
              key={index}
              onClick = {() => onClick(index+1)}
            >
            {index+1}
          </Button>
        )
      }
    </div>
  );
};

export default Rating;