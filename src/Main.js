import React, {useEffect} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Main = (props) => {
    return (
        <div className={props.className} > 
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Main;