import { useState, useEffect } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Header from './components/Header' // Import the Header component

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTours = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/react-tours-project')
      if (!response.ok) {
        throw new Error('Failed to fetch tours')
      }
      const data = await response.json()
      setTours(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <h1>Loading...</h1>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <h1>Error: {error}</h1>
      </>
    )
  }

  if (tours.length === 0) {
    return (
      <>
        <Header />
        <div>
          <h1>No Tours Left</h1>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <Gallery tours={tours} setTours={setTours} />
    </>
  )
}

export default App
