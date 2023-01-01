import { useEffect, useState } from "react";

export const NewsDropdown = ({filterValueSelected}) => {

  const [selected, setSelected] = useState('Select your news');
  const [isActive, setIsActive] = useState(false);
  const options = ['Angular', 'React', 'Vuejs' ];

  const filterValueLS = localStorage.getItem('filterValue');

  useEffect(() => {
    if(filterValueLS === null || filterValueLS === undefined){
      setSelected('Select your news');  
    }
    else{
      setSelected(filterValueLS);
    }
  }, [selected]);
  
  
  const onFilterValueChanged = (event) => {
    filterValueSelected(event.target.textContent);
    localStorage.setItem('filterValue', event.target.textContent);
  }
  

  const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };


  return (
    <>
    <div className="news-selector">
      <div className="option-selected" onClick={e => setIsActive(!isActive)}>
        {selected}
          <Icon/>
      </div>
      { isActive &&
        <div className="dropdown-container">
        <div className="dropdown-list">

          {options.map(option => (
            <div key={option} onClick={e=> {
              setIsActive(false)
              setSelected(e.target.textContent)
              onFilterValueChanged(e);
            }}

            className="dropdown-item">
            <img className="logo" src={`assets/${option}.svg`} alt={`${ option} logo`}/>{option}</div>
          ))}
        </div>
      </div>
      }
      
    </div>
    </>
  )
}
