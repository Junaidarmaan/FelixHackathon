import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-2 rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Virtual Labs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <form class="d-flex" role="search">
                <input
                  class="form-control-sm me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  list="programming-experiments" 
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>

                <datalist id="programming-experiments">
                  <option value="Java - Fibonacci Series using Recursion" />
                  <option value="Java - Factorial Calculation using Iteration" />
                  <option value="Java - Palindrome Number Check" />
                  <option value="Java - Prime Number Checker" />
                  <option value="Java - Bubble Sort Algorithm" />
                  <option value="Java - Binary Search Implementation" />
                  <option value="Java - Stack Implementation using Array" />
                  <option value="Java - Queue Implementation using Linked List" />
                  <option value="Java - File Handling Example" />
                  <option value="Java - Multithreading with Runnable Interface" />
                  
                  <option value="Python - Fibonacci Series using Recursion" />
                  <option value="Python - Factorial Calculation using Iteration" />
                  <option value="Python - Palindrome String Check" />
                  <option value="Python - Prime Number Checker" />
                  <option value="Python - Bubble Sort Algorithm" />
                  <option value="Python - Binary Search Implementation" />
                  <option value="Python - Stack Implementation using List" />
                  <option value="Python - Queue Implementation using Collections" />
                  <option value="Python - File Handling Example" />
                  <option value="Python - Multithreading with Threading Module" />
                </datalist>
              </form>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <div class="btn-group dropstart">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Experiments
                  </button>

                  <ul class="dropdown-menu ">
                    <li>
                      <a class="dropdown-item active" href="#">
                        Electronics And Communication
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Computer Science And Engineering
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Electrical Engineering
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Mechanical Engineering
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chemical Engineering
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Biotechnology and Bio-Medical Engineering
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Civil Engineering
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Physical Sciences
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chemical Sciences
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
