const Ingredients = ({dish}) => {
  return  (
      <div>
        <strong>Ингридиенты:</strong> { dish.join(',')}
      </div>
    );
}

export default Ingredients;