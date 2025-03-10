import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-2 rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Virtual Labs</a>




                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <form class="d-flex" role="search">
                                <input class="form-control-sm me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Experiments
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item active" href="#">Electronics And Communication</a></li>
                                        <li><a class="dropdown-item" href="#">Computer Science And Engineering</a></li>
                                        <li><a class="dropdown-item" href="#">Electrical Engineering</a></li>
                                        <li><a class="dropdown-item" href="#">Mechanical Engineering</a></li>
                                        <li><a class="dropdown-item" href="#">Chemical Engineering</a></li>
                                        <li><a class="dropdown-item" href="#">Biotechnology and Bio-Medical Engineering</a></li>
                                        <li><a class="dropdown-item" href="#">Civil Engineering</a></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><a class="dropdown-item" href="#">Physical Sciences</a></li>
                                        <li><a class="dropdown-item" href="#">Chemical Sciences</a></li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
