import React, { useEffect, useState } from 'react';
import News from './News';
import './App.css';


function App() {
  const [articles, setArticles] = useState([]);
  const [catagori, setcatagori] = useState("bitcoin");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${catagori}&from=2024-01-25&apiKey=a9bdbcbbd0994101ba2a8805adae7990`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catagori]);

  return (
    <div className='app'>
      <header className='head'>
        <h1>Top News</h1>
        <input type="text"  onChange={(e)=>{
          if(e.target.value!==""){
            setcatagori(e.target.value);
          }
          else{
            setcatagori("bitcoin");
          }
        }}   placeholder='Search Coin' />
      </header>
      <div className='hello'>

      {
  articles.length !== 0 ?
    articles.map((article) => (
      <News key={article.url} article={article} />
    ))
    :
    <h3>No News Found Here For This Search Value</h3>
    }

      </div>
    </div>
  );
}

export default App;
