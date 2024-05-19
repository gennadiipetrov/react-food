import React from 'react';

import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import Restaurants from '../features/restaurants/Restaurants';
import restaurants from '../mock/mock.js'

const MainLayout = () =>  {
  return (
            <div>
                <Header/>

                <Restaurants value={restaurants}></Restaurants>

                <Footer/>
            </div>
        );
}

export default MainLayout;