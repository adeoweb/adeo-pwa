import React, { FunctionComponent } from 'react';
import classes from './styles/Map.scss';

interface MapProps {
    src: string;
    width: string;
    height: string;
    allowFullScreen?: boolean;
}

const defaultProps = {
    allowFullScreen: true
};

const Map: FunctionComponent<MapProps> = ({
    src,
    width,
    height,
    allowFullScreen = defaultProps.allowFullScreen
}) => {
    return (
        <div>
            <iframe
                className={classes.map}
                src={src}
                width={width}
                height={height}
                allowFullScreen={allowFullScreen}
                aria-hidden={'false'}
            />
        </div>
    );
};

export default Map;
