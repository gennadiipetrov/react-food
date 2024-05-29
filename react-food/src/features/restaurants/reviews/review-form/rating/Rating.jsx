
export const Rating = ({ onClick }) => {
  return (
    <div>
      <button onClick = {() => onClick(1)}>1</button>
      <button onClick = {() => onClick(2)}>2</button>
      <button onClick = {() => onClick(3)}>3</button>
      <button onClick = {() => onClick(4)}>4</button>
      <button onClick = {() => onClick(5)}>5</button>
    </div>
  );
};

export default Rating;