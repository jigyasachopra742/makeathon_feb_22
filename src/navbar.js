import React from "react";
import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <div>
            <section className="navbar-bg">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="navbar-brand" href="#"><strong>CashTash</strong></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link className="nav-link active" to = "/"><strong>Home</strong></Link>
                            </li>
                            
                            <li class="nav-item">
                            <Link className="nav-link active" to = "/Service"><strong>Services</strong></Link>
                            </li>

                            <li class="nav-item">
                            <Link className="nav-link active" to = "/About"><strong>About</strong></Link>
                            </li>

                            <li class="nav-item">
                            <Link className="nav-link active" to = "/Contactt"><strong>Support</strong></Link>
                            </li>

                            <li class="nav-item">
                            <Link className="nav-link active" to = "#"><strong>Credits</strong></Link>
                            </li>

                            <li class="nav-item">
                            <Link className="nav-link active" to = "#"><strong>Loan</strong></Link>
                            </li>
                            
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-style" type="submit"><strong>Sign Up</strong></button>
                            <button class="btn btn-style" type="submit"><strong>Log In</strong></button>
                        </form>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Navbar;