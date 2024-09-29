import React from 'react'

function FindBest() {
    return (<div className='main-content'>
    <div className='find-best-container'>
        <div className='find-best'>
            <div className='d-flex justify-content-center' style={{ height: 690 }}>
                <div className='d-flex align-items-center' style={{ width: 680 }}>
                    <div>
                        <p style={{ fontSize: 72 }}>We find the Best Credit Cards for You</p>
                        <button className='gradient-btn px-4 py-2'>Find A Credit Card</button>
                    </div> 
                </div>
                <div className='pt-5'>
                <img className='mt-5' src='rectCredit.png' height={300} />
                </div>
                </div>
            </div>
        </div>
        <div className='d-flex position-relative px-5' style={{ top: '-50px' }}>
            <div className='text-center mx-3'>
                <img src='Chart.png' width={180} height={180} />
                <h2>Personalised Offers</h2>
                <p className='text-muted'>Find best Credit Cards based on your spend pattern</p>
            </div>
            <div className='text-center mx-3'>
                <img src='Percent.png' width={180} height={180} />
                <h2>Earn Rewards</h2>
                <p className='text-muted'>Earn Rewards for every successful Credit Card approval</p>
            </div>
            <div className='text-center mx-3'>
                <img src='dualCredit.png' width={180} height={180} />
                <h2>Compare Cards</h2>
                <p className='text-muted'>Compare your existing Cards with best in the industry</p>
            </div>
            <div className='text-center mx-3'>
                <img src='shield.png' width={180} height={180} />
                <h2>Max Benifits</h2>
                <p className='text-muted'>Get maximum benefits from your Credit Cards</p>
            </div>
        </div>

        <div className="row px-5">
            <div className="col-md-3">
                <img src='kundali.png' style={{ width: '100%' }} />
            </div>
            <div className="col-md-3">
                <img src='myCard.png' style={{ width: '100%' }} />
            </div>
            <div className="col-md-3">
                <img src='compareCard.png' style={{ width: '100%' }} />
            </div>
            <div className="col-md-3">
                <img src='loungeFinder.png' style={{ width: '100%' }} />
            </div>
        </div>

        <div className='mt-5'>
            <div className='text-center popular-cards d-flex justify-content-center'>
                <div className='mt-5' style={{ width: '60%' }}>
                    <h1 style={{ fontSize: 78 }}>Popular credit cards for every dedicated category</h1>
                    <div className='mt-5'>
                        <button className='popular-cards-button mx-2'>Featured</button>
                        <button className='popular-cards-button mx-2'>Cashback</button>
                        <button className='popular-cards-button mx-2'>Rewards</button>
                        <button className='popular-cards-button mx-2'>Fuel</button>
                        <button className='popular-cards-button mx-2'>Business</button>
                    </div>
                </div>
            </div>
            <div className='popular-cards-options mt-5 row justify-content-between mx-5'>
                <div className='col-4'>
                    <img src='axisCredit.png' style={{ width: '90%' }} />
                    <div className='my-4'>
                        <button className='card-category-btn'>TRAVEL</button>
                        <button className='card-category-btn mx-3'>ONLINE SHOPPING</button>
                    </div>
                    <h2>HDFC Regalia</h2>
                    <p className='text-muted' style={{fontSize:24}}>50% Cashback</p>
                    <p className='text-muted'>High cashback on online and offline spends</p>
                    <a>Apply Now &rarr;</a>
                </div>
                <div className='col-4'>
                    <img src='axisCredit.png' style={{ width: '90%' }} />
                    <div className='my-4'>
                        <button className='card-category-btn'>TRAVEL</button>
                        <button className='card-category-btn mx-3'>ONLINE SHOPPING</button>
                    </div>
                    <h2>HDFC Regalia</h2>
                    <p className='text-muted' style={{fontSize:24}}>50% Cashback</p>
                    <p className='text-muted'>High cashback on online and offline spends</p>
                    <a>Apply Now &rarr;</a>
                </div>
                <div className='col-4'>
                    <img src='axisCredit.png' style={{ width: '90%' }} />
                    <div className='my-4'>
                        <button className='card-category-btn'>TRAVEL</button>
                        <button className='card-category-btn mx-3'>ONLINE SHOPPING</button>
                    </div>
                    <h2>HDFC Regalia</h2>
                    <p className='text-muted' style={{fontSize:24}}>50% Cashback</p>
                    <p className='text-muted'>High cashback on online and offline spends</p>
                    <a>Apply Now &rarr;</a>
                </div>
            </div>
        </div>
        <div>
        
        <div className='position-relative'>     
        <p className='styled-text text-center'>Compare Cards</p>
            <div className='eclipse'></div>
            <img className='styled-image' src='gold-podium.png' />
            <div className='eclipse' style={{top:'95%'}}></div>
            <img className='position-absolute' style={{left:'32%', top:'12%', scale:'0.9'}} src='white-podium.png'/>
            <div className='position-absolute' style={{top:'53%', left:'16%', scale:'0.9'}}>
                <img className='mx-5' src='leftCredit.png'/>
                <img className='mx-5' src='mainCredit.png'/>
                <img className='mx-5' src='rightCredit.png'/>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
                <div className='text-center' style={{ width: '60%' }}>
                    <h1>Uncover hidden benefits and find the perfect card for your financial goals.</h1>
                    <button className='gradient-btn mt-3'>Compare Cards</button>
                </div>
            </div>
        </div>
        <div className='lounge-finder pb-5'>
            <div className='d-flex justify-content-center mt-5'>
                <div className='text-center' style={{ width: '60%' }}>
                    <p style={{ fontSize: 85 }}>Lounge Finder</p>
                    <h1>Check which lounges you can access at a click!</h1>
                    <button className='gradient-btn mt-3 px-3'>Try Lounge Finder</button>
                </div>
            </div>
            <div className='row justify-content-between mt-5 mx-5'>
                <div className='col-4'>
                    <div className='d-flex align-item-center'>
                        <img src='igi1.png' style={{height:'100%'}}/>
                        <div className='mx-3'>
                            <p className='mb-0' style={{ fontSize: 35 }}>Indra Gandhi Int’l</p>
                            <p className='text-muted'>IGI. New Delhi</p>
                        </div>
                        
                    </div>
                    
                    <div className='position-relative text-center pb-5'>
                    <div className='loung-flash' ></div>
                        <img src='lounge1.png' style={{width:'90%', zIndex:1, position:'relative', filter: 'drop-shadow(#dad2bb 0px 38px 47px)'}}/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='d-flex align-item-center'>
                        <img src='igi1.png' style={{height:'100%'}}/>
                        <div className='mx-3'>
                            <p className='mb-0' style={{ fontSize: 35 }}>Indra Gandhi Int’l</p>
                            <p className='text-muted'>IGI. New Delhi</p>
                        </div>
                    </div>
                    <div className='position-relative text-center pb-5'>
                    <div className='loung-flash' ></div>
                        <img  src='lounge2.png' style={{width:'90%', zIndex:1, position:'relative', filter: 'drop-shadow(#e5d1d8 0px 38px 47px)'}}/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='d-flex align-item-center'>
                        <img src='igi1.png' style={{height:'100%'}}/>
                        <div className='mx-3'>
                            <p className='mb-0' style={{ fontSize: 35 }}>Indra Gandhi Int’l</p>
                            <p className='text-muted'>IGI. New Delhi</p>
                        </div>
                    </div>
                    <div className='position-relative text-center pb-5'>
                    <div className='loung-flash' ></div>
                        <img src='lounge3.png' style={{width:'90%', zIndex:1, position:'relative', filter: 'drop-shadow(#f9f6dd 0px 38px 47px)'}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-5 position-relative' style={{backgroundColor:'#F0F0F0'}}>
        <div className='text-center pt-5'>
                    <p className='m-0' style={{ fontSize: 34, color: 'black' }}>WHAT THEY SAY ABOUT BANKKARO</p>
                    <h1 style={{fontSize:110, color: 'black'}}>See the <span style={{color:'#79572C'}}>Impact</span> in action</h1>
                    <div className='position-relative'>
                    <img src='ratan-tata.png' width={500}/>
                    <div className='flash-inner'></div>
                    <div className='flash'></div>
                    <img src='scifi.png' className='mt-5 position-relative' style={{width:'70%', zIndex:1}}/>
                    </div>
                    <div className='position-absolute' style={{left:'4%', top:'45%'}}>
                        <h1 style={{fontSize:80, color:'black'}}>Ratan Tata</h1>
                        <h1 style={{fontSize:40, color:'#79572C'}}>Chairperson Tata Group</h1>
                    </div>
                    <div className='position-absolute' style={{right:'4%', top:'45%'}}>
                        <p style={{color:'black', width:400, fontSize:24}}>
                        “ BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options. “
                        </p>
                    </div>
                    {/* <button className='gradient-btn mt-3'>Compare Cards</button> */}
                </div>

        </div>
    </div>)
}

export default FindBest