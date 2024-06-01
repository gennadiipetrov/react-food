
export const Rating = ({ defaultValue = 1, onClick, MAX }) => {
  return (
    <div>
      {
        ([...Array(MAX)]).map((_, index) => 
          <button 
              key={index}
              onClick = {() => onClick(index+1)}
            >
            {index+1}
          </button>
        )
      }
    </div>
  );
};

export default Rating;