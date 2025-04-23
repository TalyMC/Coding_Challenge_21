function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour // Destructure tour properties

  return (
    <div className="tour-card">
      <img src={image} alt={name} /> {/* Display tour image */}
      <div className="tour-details">
        <h2>{name}</h2> {/* Display tour name */}
        <p>{info}</p> {/* Display tour info */}
        <h3>${price}</h3> {/* Display tour price */}
        <button onClick={() => removeTour(id)}>Not Interested</button> {/* Button to remove tour */}
      </div>
    </div>
  )
}

export default TourCard