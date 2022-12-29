import { useState } from "react";

export const getPagination = (favsNews) => {


    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(8);
  
    //Get current news
    const indexOfLastNew = currentPage * newsPerPage;
    const indexOfFirstNew = indexOfLastNew - newsPerPage;

    if(favsNews){
        const currentNew = favsNews.slice(indexOfFirstNew, indexOfLastNew);
        return {
            currentNew,
            newsPerPage,
            setCurrentPage
        }
    }

    return {
        newsPerPage,
        setCurrentPage

    }
}