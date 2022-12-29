import { useEffect, useState } from 'react'

export const NewsItem = ({hackerNews}) => {

  const [favNew, setFavNew] = useState([]);
  const [toggle, setToggle] = useState([]);
  const [solidIcon, setSolidIcon] = useState([]);

  let favNewsArray = [];
  let idFavNewsArray = [];

  const favNewsLS = JSON.parse(localStorage.getItem('favoritesNews'));
  const idNewFavLS = JSON.parse(localStorage.getItem('idNewFav'));

  const handleClickNews = (hackerNew) => {
    window.open(hackerNew.url); 
  }

  const onClickFavNew = (hackerNew, e) => {
    if(e.detail === 1){
      if(favNewsLS && idNewFavLS){  
        if(idNewFavLS.includes(hackerNew.id)){
          return;
        }
  
        favNewsArray.push(...favNewsLS);
        favNewsArray.push(hackerNew);
        localStorage.setItem('favoritesNews', JSON.stringify(favNewsArray));
        idFavNewsArray.push(...idNewFavLS);
        idFavNewsArray.push(hackerNew.id);
        localStorage.setItem('idNewFav', JSON.stringify(idFavNewsArray));
        setSolidIcon(idFavNewsArray);
        return;
      }
  
      favNew.push(hackerNew);
      toggle.push(hackerNew.id);
      localStorage.setItem('idNewFav', JSON.stringify(toggle));
      localStorage.setItem('favoritesNews', JSON.stringify(favNew));
      setSolidIcon(idFavNewsArray);
    }
    else if(e.detail === 2){
      let idNewFavLS = JSON.parse(localStorage.getItem('idNewFav'));
      let favNewsLS = JSON.parse(localStorage.getItem('favoritesNews'));

      // console.log(idNewFavLS);
      if(idNewFavLS.length > 0 && favNewsLS.length >0){
        const indexId = idNewFavLS.indexOf(hackerNew.id)
        const indexNews = favNewsLS.indexOf(hackerNew);
        idNewFavLS.splice(indexId, 1);
        favNewsLS.splice(indexNews, 1);
        localStorage.setItem('idNewFav', JSON.stringify(idNewFavLS));
        localStorage.setItem('favoritesNews', JSON.stringify(favNewsLS));

      }
    }

    

  }

  useEffect(() => {
    const idNewFavLSUE = JSON.parse(localStorage.getItem('idNewFav'));

    setSolidIcon(idNewFavLSUE);
  }, [])
  

  return (
        hackerNews.map((hackerNew) => (
          <>
            <div className="news-item" key={hackerNew.id}>
                <div onClick={() => handleClickNews(hackerNew)}  className="news-header"> <i className="fa-regular fa-clock"></i>{hackerNew.date}, published by {hackerNew.author}
                  <p className="news-info">{hackerNew.title}</p>
                </div>
                <div className="fav-btn">
                  <i 
                    onClick={(e)=>onClickFavNew(hackerNew, e)}
                    // className={ idNewFavLS ? `${idNewFavLS.includes(hackerNew.id) ? 'fa-solid' :'fa-regular' } fa-heart` : 'fa-regular fa-heart'}
                    className={ solidIcon ? `${solidIcon.includes(hackerNew.id) ? 'fa-solid' :'fa-regular' } fa-heart` : 'fa-regular fa-heart' }
                    >
                  </i>
                </div>
            </div>
          </>
        ))
  )
}
