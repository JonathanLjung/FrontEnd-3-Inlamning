const ShoeList = ({ shoes, title }) => {

  return (
    <div className="shoe-list">
      <h2>{title}</h2>
      {shoes.map((shoe) => (
        <div className="shoe-preview" key={shoe.id}>
          <h3>
            {shoe.brand} {shoe.model}
          </h3>
          <p>Storlek: {shoe.size}</p>
          <p>Price: {shoe.price}kr</p>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
