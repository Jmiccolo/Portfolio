import React from 'react';
import './Loading.css';
import Container from "./logo/container";

const Loading = (props)=>{
    return (
        <div className="Loading">
            <Container setLoaded={props.setLoaded}/>
        </div>
    );
};

export default Loading;