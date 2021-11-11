import React from 'react';
import { Image } from 'react-bootstrap';

const Avatar = (props) => {
    return (
        <Image
            src={props.avatarURL}
            alt={props.name}
            roundedCircle
            fluid
            className={props.className}
            width={props.width}
            height={props.height}
        />
    );
};

export default Avatar;
