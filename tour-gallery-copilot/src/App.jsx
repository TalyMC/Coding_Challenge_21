import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Header from './components/Header' // Import the Header component

function App() {
  // State to store tours, loading status, and error messages
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true) // Set loading to true while fetching
    setError(null) // Reset error state
    try {
      const response = await fetch('/api/react-tours-project') // Fetch data from the API
      if (!response.ok) {
        throw new Error('Failed to fetch tours') // Handle HTTP errors
      }
      const data = await response.json() // Parse JSON response
      setTours(data) // Update tours state with fetched data
    } catch (err) {
      setError(err.message) // Set error message if fetch fails
    } finally {
      setLoading(false) // Set loading to false after fetch completes
    }
  }

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours()
  }, [])

  // Render loading state
  if (loading) {
    return (
      <>
        <Header />
        <h1>Loading...</h1>
      </>
    )
  }

  // Render error state
  if (error) {
    return (
      <>
        <Header />
        <h1>Error: {error}</h1>
      </>
    )
  }

  // Render when no tours are left
  if (tours.length === 0) {
    return (
      <>
        <Header />
        <div>
          <h1>No Tours Left</h1>
          <button onClick={fetchTours}>Refresh</button> {/* Button to refetch tours */}
        </div>
      </>
    )
  }

  // Render the gallery with tours
  return (
    <>
      <Header />
      <Gallery tours={tours} setTours={setTours} /> {/* Pass tours and setTours to Gallery */}
    </>
  )
}

export default App
