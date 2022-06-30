import React from 'react'
import Stopover from '../Stopover'
import "./style.css"

function Ticket({ item }) {
    return (
        <div>
            <section >
                <div className="banner-main">
                    <img src={require('./images/banner.jpg')} alt="#" />
                    <div className="container">
                        <div className="text-bg">
                            <h1>Skii Holiday<br /><strong className="white">Amazing Skii</strong></h1>
                            <div className="container">
                                <form className="main-form">
                                    <h3>Find Your Ticket</h3>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <label >Keywords</label>
                                                    <input className="form-control" placeholder="" type="text" name="" />
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <label >Category</label>
                                                    <select className="form-control" name="Any">
                                                        <option>Any</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <label >Min Price</label>
                                                    <input className="form-control" placeholder="00.0" type="text" name="00.0" />
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <label >Duration</label>
                                                    <input className="form-control" placeholder="Any" type="text" name="Any" />
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <label >Date</label>
                                                    <input className="form-control" placeholder="Any" type="date" name="Any" />
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <label >Max Price</label>
                                                    <input className="form-control" placeholder="00.0" type="text" name="00.0" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                            <a href="#">search</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about --> */}
            <div id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="titlepage">
                                <h2>About  our Skii agency</h2>
                                <span> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="about-box">
                                    <p> <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure thereThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span></p>
                                    <div className="palne-img-area">
                                        <img className='boardImg' src={require('./images/board.png')} alt="images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#">Read More</a>
                </div>
            </div>
            {/* <!-- end about -->
            <!-- traveling --> */}
            <div id="travel" className="traveling">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="titlepage">
                                <h2>Select Offers For Traveling</h2>
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="traveling-box">
                                <i><img src={require("./images/travel-icon.png")} alt="icon" /></i>
                                <h3>Different Skii Sport</h3>
                                <p> going to use a passage of Lorem Ipsum, you need to be </p>
                                <div className="read-more">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="traveling-box">
                                <i><img src={require("./images/travel-icon2.png")} alt="icon" /></i>
                                <h3>Mountains Tours</h3>
                                <p> going to use a passage of Lorem Ipsum, you need to be </p>
                                <div className="read-more">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="traveling-box">
                                <i><img src={require("./images/travel-icon3.png")} alt="icon" /></i>
                                <h3>Bus Tours</h3>
                                <p> going to use a passage of Lorem Ipsum, you need to be </p>
                                <div className="read-more">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className="traveling-box">
                                <i><img src={require("./images/travel-icon4.png")} alt="icon" /></i>
                                <h3>Winter Rest</h3>
                                <p> going to use a passage of Lorem Ipsum, you need to be </p>
                                <div className="read-more">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end traveling -->
            <!--London --> */}
            <div className="London">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Weekend in Mountain</h2>
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="London-img">
                        <figure><img className='mountImg' src={require("./images/Mountain.jpg")} alt="img" /></figure>
                    </div>
                </div>
            </div>
            {/* <!-- end London -->
            <!--Tours --> */}
            <div className="Tours">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>The Best Tours</h2>
                                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                            </div>
                        </div>
                    </div>
                    <section id="demos">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <img className="img-responsive" src="images/1.jpg" alt="#" />
                                        <h3>Winter Tour</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive" src="images/2.jpg" alt="#" />
                                        <h3>Mountain</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive" src="images/3.jpg" alt="#" />
                                        <h3>London</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive" src="images/2.jpg" alt="#" />
                                        <h3>Chair Lift Tour</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in soe suffk even slightly believable. If y be sure there</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <!-- end Tours -->
            <!-- Amazing --> */}
            <div className="amazing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="amazing-box">
                                <h2>Amazing London Tour</h2>
                                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</span>
                                <a href="/stopover">Book Now</a><a href={"/education"}>Get More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end Amazing --> */}
        </div>
    )
}

export default Ticket