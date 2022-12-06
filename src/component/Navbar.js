import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiNews } from 'react-icons/bi';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <Link className="navbar-brand text-white font-weight-bold" to="/"><BiNews className='icons' />{props.heading}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/sports">Sports</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
