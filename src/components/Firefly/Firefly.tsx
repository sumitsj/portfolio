import React from 'react';
import './Firefly.scss';

export const Firefly: React.FC = () => {
    const count = 15;

    const getHtml = (i: number) => <div key={i} className="firefly"></div>;

    return <>
        {
            Array.apply(0, Array(10)).map(function (x, i) {
                return getHtml(i);
            })
        }
    </>
}


export default Firefly;