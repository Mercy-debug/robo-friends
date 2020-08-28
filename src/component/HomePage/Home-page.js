import React from 'react';
import './Home-page.css';


const HomePage = (props) => {
  return (
    <div className='homepage bg-lightest-blue'>
      <button
        className='pa3 ba b--green bg-white pointer dim'
        onClick={props.isSignedIn}
      >login</button>

    </div>
  );
}

export default HomePage;