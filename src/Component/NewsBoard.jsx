import  { useState, useEffect } from 'react'
import NewsItem from '../Component/NewsItem'


const NewsBoard = ({category}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // SAFETY CHECK: Ensure articles exists and is an array
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          setNews([]); // Fallback to empty array
          console.warn("Unexpected API response structure:", data);
        }
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <div className='container-fluid row'>
      <h1 className='text-center mt-4'>Breaking <span className='badge bg-danger'>News</span></h1>
      {news && news.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
