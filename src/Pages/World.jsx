import { useEffect, useContext, useState } from "react";
import Header from "../components/Header/Header";
import PrintNews from "../components/PrintNews/PrintNews";
import api from "../api";
import styles from './Titulo.module.css'
import { ContextProvider } from "../context/ContextProvider";
import Loading from "../components/Loading/Loading";


const World = () => {

  const [loading, setloading] = useState(true)

  const {apiKey, setNews} = useContext(ContextProvider);

  const fetchNews = async () => {
    const { data } = await api.get(`world.json?api-key=${apiKey}`);
    setNews(data.results);
    setloading(false)
  }

  useEffect(() => {
   fetchNews();
  }, [])


  return (
    <div>
      <Header />  
      <h1 className={styles.titulo}>Mundo</h1>    
      {!loading 
      ? <ul> <PrintNews /> </ul>
      : <Loading /> }
    </div>
  )
}

export default World;