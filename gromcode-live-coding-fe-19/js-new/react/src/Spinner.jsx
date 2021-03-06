import React from 'react';

//in:  obj({size:number}}

const Spinner = props => {

  return <span className="spinner" style={{ width: props.size, height: props.size }}></span>;
};

export default Spinner;
