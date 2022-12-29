import { useEffect, useState } from 'react';
import { NewsDropdown } from './news/components/NewsDropdown';
import { AllPage } from './news/pages/AllPage';
import { FavsPage } from './news/pages/FavsPage';

export const NewsApp = () => {

  const [allPage, setAllPage] = useState(true);
  const [optionSelection, setOptionSelection] = useState('')

  const filterValueLS = localStorage.getItem('filterValue');

  useEffect(() => {
    setOptionSelection(filterValueLS);
  
  }, [optionSelection]);
  

  const onFilterValueSelected = (filteredValue) => {
      setOptionSelection(filteredValue);
  }
    return (
    <>
        <header>
            <h1>HACKER NEWS</h1>
        </header>
        <div className="container">
          <div className="views-container">
            <div className="views">
              <span className={`rectangle-view ${allPage ? 'active-view' : ''}`} onClick={() => setAllPage(true)}>All</span>
              <span className={`rectangle-view ${allPage ? '' : 'active-view'}`} onClick={() => setAllPage(false)}>My Faves</span>
            </div>
          </div>
              <NewsDropdown filterValueSelected={onFilterValueSelected}/>
            {
              (
                allPage 
                ? <AllPage option={optionSelection}/> 
                : <FavsPage/>
                )
              }          
        </div>
    </>

  )
}
