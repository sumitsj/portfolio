import React from 'react';
import './Firefly.scss';

export const Firefly: React.FC = () => {
    const count = 15;

    const getHtml = (i: number) => <div key={i} className="firefly"></div>;

    return <div>
        {
            Array.apply(1, Array(count)).map(function (x, i) {
                return getHtml(i);
            })
        }
    </div>
}


export default Firefly;