import React from 'react';
import PropTypes from 'prop-types';
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

Avatar.propTypes = {
    props: PropTypes.shape({
        avatarURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }),
};

export default Avatar;
