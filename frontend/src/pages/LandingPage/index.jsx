import React from 'react';
import MainBlock from './MainBlock';
import Footer from '../../components/Footer/Footer';
import logo from '../../images/grouprtrans.png';

const index = () => {
  return (
    <div>
      <img src={logo} style={{ width: '10%', padding: '20px' }}></img>
      <MainBlock />
      <Footer />
    </div>
  );
};

export default index;
