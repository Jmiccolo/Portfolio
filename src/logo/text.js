import React from 'react';

const Text = (props) => {
    return (
       <g id={props.id} transform="translate(280, 490)">
            <text fontSize={props.fontSize} fill="black" textLength={props.textLength}>osh Miccolo</text>
       </g> 
    );
};

export default Text;