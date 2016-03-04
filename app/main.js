/**
 * Created by Ron on 16/2/27.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';


class Template extends React.Component {
    render() {
        let htmlVal =
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="starter-template">
                        <h1>Bootstrap starter template</h1>
                        <p className="lead">{'Use this document as a way to quickly start any new project.'}<br/>{'All you get is this text and a mostly barebones HTML document.'}</p>
                        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                            Module
                        </button>
                        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title" id="myModalLabel">{'Modal title'}</h4>
                                    </div>
                                    <div className="modal-body">
                                        {'balabala'}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        return htmlVal;
    }
}

//main.js
function main() {
    ReactDOM.render(<Template />, document.getElementById('app'));
}
main();