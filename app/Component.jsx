/**
 * Created by Ron on 16/2/27.
 */

'use strict';

import React from 'react';

export default class Hello extends React.Component {
    render() {
        let htmlVal =
            <div>
                <h1>color is from css file</h1><h2>color is from scss file</h2>
                <a href='installation.html' className='large button'>Install Foundation for Sites</a>
                <div className='alert callout'>
                    <p>Error fetching stick.</p>
                </div>
            </div>;
        return htmlVal;
    }
}