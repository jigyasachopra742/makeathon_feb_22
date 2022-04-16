import React from "react";

function Header()
{
    return(
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side">
                            
                            <h1 className="display-2">Online Lending<br />made easy for you</h1>
                            
                            <p className="main-hero-para">
                                <strong>In banking or finance, trust is the only 
                                thing you have to sell.
                                </strong>
                            </p>

                            <h3>Get Early access for you</h3>
                            <div className="input-group mt-3">
                                <input type= "text" className="rounded-pill p-2 w-75 me-3 form control text" id = "" placeholder="Enter your Email"></input>
                            

                            </div>

                            <div className="col-12 col-lg-6 header-right-side d-flex
                             justify-content-center align-items-right photo">
                                 <img 
                                    src="https://media.istockphoto.com/photos/bank-employee-explains-bank-services-to-new-customer-picture-id1281341046?b=1&k=20&m=1281341046&s=170667a&w=0&h=MFqUmrSPPAWy--pDCOW9bFZPmUYMfA6oVBsYar3Xb7c="
                                    alt="image"
                                    className="img-fluid"
        
                                 
                                 />

                             </div>
                        </div>

                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;