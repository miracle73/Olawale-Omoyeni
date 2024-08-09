import './App.css'
import HomePage from './HomePage'
import Blog from './Blog'
import Newsletter from './Newsletter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import BlogProvider from './DataContext';


function App() {
//   useEffect(() => {
//     // Clear local storage
//     localStorage.clear();

//     // // Refresh the page
//     // window.location.reload();
// }, []);
//https://capable-freedom-97da2f1754.strapiapp.com
//https://airiskguardcms.com/api/blogs?populate=*
  let { loading, data, error } = useFetch('https://airiskguardcms.com/api/blogs?populate=*')
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error!</p>
  console.log(data)
// const url = 'airiskguardcms.com/api/blogs?populate=*'
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         console.log(result);
//       } catch (error) {
//         console.log(error.message);
//       } finally {
//         console.log(false);
//       }
//     };

//     fetchData();
//   }, [url]);

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