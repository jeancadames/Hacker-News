import { useEffect, useState } from "react";
import { getNews } from "../helpers/getNews";

export const useNews = (optionSelection) => {
    const [hackerNews, setHackerNews] = useState([]);

    const getHackerNew = async() => {
      const newNews = await getNews(optionSelection);
      setHackerNews(newNews);
    }

    useEffect(() => {
        getHackerNew();   
    }, [optionSelection]);
    
    

    return{
        hackerNews
    }

}