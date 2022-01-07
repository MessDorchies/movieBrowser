import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='headerContainer'>
                    <div className='logoContainer'>
                    <Link to="/">Home</Link>
                    </div>
                    <div className='navContainer'>
                        <ul className="nav-list">
                            <li>
                                <Link to="/Film">Film</Link>
                            </li>
                            <li>
                                <Link to="/Serie">Serie</Link>
                            </li>
                            <li>
                                <Link to="/Search">Search</Link>
                            </li>
                            <li>
                                <Link to="/MyList">My List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
