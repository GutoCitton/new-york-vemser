import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import PrintNews from "../components/PrintNews/PrintNews";
import api from "../api";


const Cience = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const { data } = await api.get('science.json?api-key=6oAAdyBTjZeLo1huPSHFZGzFl5fe8CJA');
    setNews(data.results);
  }

  useEffect(() => {
   fetchNews();
  }, [])


  return (
    <div>
      <Header />
      <h1>Cience</h1>      
      <ul>
        <PrintNews news={news}/> 
      </ul> 
    </div>
  )
}

export default Cience;