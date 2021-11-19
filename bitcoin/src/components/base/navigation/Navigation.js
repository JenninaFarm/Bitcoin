import React from 'react';

const Navigation = (props) => {

  return (
    <div className='navigation'>
      {props.links.map((value, index) => {
        return <li key={index}> <a href={value.href}>{value.name} </a></li>
      })}
    </div>
  );
}

export default Navigation;