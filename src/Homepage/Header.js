import React from 'react'

function Header() {

    return (
        <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-light px-5" style={{height:80}}>
            <a className="navbar-brand heading" >BANKKARO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mx-3">
                        <a className="nav-link" >OUR PRODUCTS</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" >TOOLS</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" >BLOGS</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" >ABOUT US</a>
                    </li>
                </ul>
            </div>
            <div className="d-flex ">
                <div className="">
                    <button className='gradient-btn px-4'>Sign In</button>
                    <img src="user.png" alt="Profile Picture" style={{position:'relative', width:64, height:64, borderRadius:'50%', left:'-16px', zIndex:1, padding:2}} className="gradient-btn" />  
                </div>
            </div>
        </nav>
        <div className='nav-border'></div>
        </div>)
}

export default Header