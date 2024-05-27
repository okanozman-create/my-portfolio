import React from 'react';
// images
// import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between '>
        {/* logo */}
        
        <a href='#'>
          <p>Okan</p>
     
              {/* <img className='w-28 h-auto  bg-purple-900 p-1' src={Logo} alt='' /> */}
           
           {/* <img width="111" height="48" viewBox="0 0 111 48" fill="none" src={Logo} alt=''/>  */}
     
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
      </header>;
};

export default Header;
