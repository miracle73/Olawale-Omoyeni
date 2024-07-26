import './App.css'
import HomePage from './HomePage'
import Blog from './Blog'
import Newsletter from './Newsletter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import BlogProvider from './DataContext';
// import  {useEffect} from 'react'

function App() {
//   useEffect(() => {
//     // Clear local storage
//     localStorage.clear();

//     // // Refresh the page
//     // window.location.reload();
// }, []);
  let { loading, data, error } = useFetch('https://capable-freedom-97da2f1754.strapiapp.com/api/blogs?populate=*')
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error!</p>
  console.log(data)

  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage blogss={data || []} error={error || ""} loading={loading || false} />} />
          <Route path="/newsletters" element={<Blog blogss={data || []} error={error || ""} loading={loading || false} />} />
          <Route path="/newsletter/:id" element={<Newsletter blogss={data} error={error || ""} loading={loading || false} />} />
        </Routes>
      </Router>
    </BlogProvider>
  )
}

export default App