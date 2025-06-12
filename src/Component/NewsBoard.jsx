import  { useState, useEffect } from 'react'
import NewsItem from '../Component/NewsItem'

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([])

  useEffect(() => {
let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
         setNews(data.articles || data.results.articles || []);
            console.log(data.articles || data.results.articles || []);
            console.log(process.env.REACT_APP_API_KEY);// Log the articles after setting state
        });
}, [category]);

  return (
    <div className='container-fluid row'>
      <h1 className='text-center mt-4'>Breaking <span className='badge bg-danger'>News</span></h1>
      {articles && articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard
