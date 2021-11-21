import React from 'react';

const Navigation = (props) => {

  return (
    <div className='navigation'>
      {props.links.map((value, index) => {
        return (
          <li className='navigation__list-item' key={index}> 
            <a className='navigation__link' href={value.href}>{value.name}</a>
          </li>)
      })}
    </div>
  );
}

export default Navigation;