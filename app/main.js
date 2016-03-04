/**
 * Created by Ron on 16/2/27.
 */

'use strict';

//import jQuery from '../node_modules/jquery/dist/jquery.js';
//import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

//import Hello from './Component.jsx';
//import '../node_modules/foundation-sites/node_modules/jquery/dist/jquery.min.js';

//cp from Component.jsx
class Hello extends React.Component {
    render() {
        let htmlVal =
            <div>
                <h1>color is from css file</h1><h2>color is from scss file</h2>
                <button className='btn btn-default' type='button'>Button <span className='caret'></span></button>
                <br/><br/>
                <div className='bg-primary'>Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
            </div>;
        return htmlVal;
    }
}

//main.js
function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}
main();