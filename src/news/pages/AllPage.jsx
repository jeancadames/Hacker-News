import { useState } from "react";
import { NewsItem } from "../components/NewsItem";
import { Pagination } from "../components/Pagination";
import { useNews } from "../hooks/useNews";

export const AllPage = (optionSelection) => {  

  const {hackerNews} = useNews(optionSelection);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(8);

  //Get current news
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNew = hackerNews.slice(indexOfFirstNew, indexOfLastNew);

  //change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
      <div className="news-section">
        <NewsItem hackerNews={currentNew}/>
      </div>
        <Pagination newsPerPage={newsPerPage} totalNews={hackerNews.length} paginate={paginate}/>
    </>
  )
}
