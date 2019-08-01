import React from 'react';


function Loader() {
  return (
    <div>
      <div id="preloader">
        <div id="loader" className="dots-fade">
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;