import TourCard from './TourCard'

function Gallery({ tours, setTours }) {
  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)) // Filter out the tour with the given ID
  }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} /> /* Render a TourCard for each tour */
      ))}
    </div>
  )
}

export default Gallery