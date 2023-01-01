import { useEffect } from "react";
import { NewsItem } from "../components/NewsItem";
import { Pagination } from "../components/Pagination";
import { getPagination } from "../helpers/getPagination";
export const FavsPage = () => {

  const favsNews = JSON.parse(localStorage.getItem('favoritesNews'));
  const {currentNew, newsPerPage, setCurrentPage} = getPagination(favsNews);
  //change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <>
    {favsNews
    ? (
      <>
        <div className="news-section">
          <NewsItem hackerNews={currentNew}/>
        </div>
        <Pagination newsPerPage={newsPerPage} totalNews={favsNews.length} paginate={paginate}/>
      </>
    ) 
    : <div className="no-fav-message">There's no favorites news added yet</div>
    }

    </>
  )
}
