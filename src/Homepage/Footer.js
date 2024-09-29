import React from 'react'

function Footer() {
    return (
        <div>
            <div className="container">
                <footer className="row  py-5">
                    <div className="col-5 mb-3 border-bottom pb-4">
                        <div className='d-flex'>
                            <a><img src='twitter.png' /></a>
                            <a><img src='instagram.png' /></a>
                        </div>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.</p>

                        <button className='gradient-btn'><img style={{marginRight:8}} width={30} src='app_store.png'/> APP STORE</button>
                        <button className='mx-3 gradient-btn'><img style={{marginRight:8}} width={30} src='google_play.png'/> PLAY STORE</button>
                    </div>
                    <div className="col-1">

                    </div>

                    <div className="col-2 mb-3">
                        <h5>Compamy</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About BankKaro</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vision and Mission</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our Team Members</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="col-2 mb-3">
                        <h5>Blogs</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">BankKaro Savings</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cashless Makes Perfect</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">BankKaro No Interest</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">BankKaro Digital Wallet</a></li>
                        </ul>
                    </div>

                    <div className="col-2 mb-3">
                        <h5>Features</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Card Genius</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lounge Finder</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Beat My Card</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Compare Cards</a></li>
                        </ul>
                    </div>
                </footer>
                <footer className="row ">
                    <div className="col-5">
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.</p>
                    </div>
                    <div className="col-1">

                    </div>

                    <div className="col-2">
                        <h5>CONTACT</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Support</a></li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>LEGAL</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="col-2 mb-3 d-flex">
                        <button className='card-category-btn p-2  mt-auto  position-relative' style={{borderRadius:'40px', textAlign:'end', left:'-20px', fontSize:13}}>© 2024 Bankaro Powered by Pouring Pounds</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer