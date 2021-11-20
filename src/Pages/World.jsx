import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import PrintNews from "../components/PrintNews/PrintNews";
import api from "../api";
import styles from './Titulo.module.css'


const World = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const { data } = await api.get('world.json?api-key=6oAAdyBTjZeLo1huPSHFZGzFl5fe8CJA');
    setNews(data.results);
  }

  useEffect(() => {
   fetchNews();
  }, [])


  return (
    <div>
      <Header />  
      <h1 className={styles.titulo}>Mundo</h1>    
      <ul>
        <PrintNews news={news}/> 
      </ul> 
    </div>
  )
}

export default World;