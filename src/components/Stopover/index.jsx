import React from 'react'
import './style.css';

function Stopover({ item }) {
    return (
        <div className='mainDiv'>
            <section className="banner_area">
                <div className="booking_table d_flex align-items-center">
                    <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
                    <div className="container">
                        <div className="banner_content text-center">
                            <h6>Away from monotonous life</h6>
                            <h2>Relax Your Mind</h2>
                            <p>If you are looking at blank cassettes on the web, you may be very confused at the hotel prices.</p>
                            <a href={"#"} className="btn theme_btn button_hover">Get Started</a>
                        </div>
                    </div>
                </div>
                <br />
                <div className="hotel_booking_area position">
                    <div className="container">
                        <div className="hotel_booking_table">
                            <div className="col-md-3">
                                <h2>Book<br /> Your Room</h2>
                            </div>
                            <div className="col-md-9">
                                <div className="boking_table">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="book_tabel_item">
                                                <div className="form-group">
                                                    <div className='input-group date' id='datetimepicker11'>
                                                        <input type='text' className="form-control" placeholder="Arrival Date" />
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className='input-group date' id='datetimepicker1'>
                                                        <input type='text' className="form-control" placeholder="Departure Date" />
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="book_tabel_item">
                                                <div className="input-group">
                                                    <select className="wide">
                                                        <option data-display="Adult">Adult</option>
                                                        <option value="1">Old</option>
                                                        <option value="2">Younger</option>
                                                        <option value="3">Potato</option>
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <select className="wide">
                                                        <option data-display="Child" value="1">Child</option>
                                                        <option value="2">Baby</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="book_tabel_item">
                                                <div className="input-group">
                                                    <select className="wide">
                                                        <option data-display="Child">Number of Rooms</option>
                                                        <option value="1">Room Type 01</option>
                                                        <option value="2">Room Type 02</option>
                                                        <option value="3">Room Type 03</option>
                                                        <option value="3">Room Type 04</option>
                                                    </select>
                                                </div>
                                                <a className="book_now_btn button_hover" href={"#"}>Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Hotel Accomodation</h2>
                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, </p>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={require('./images/room1.jpg')} alt="" />
                                <a href={"#"} className="theme_btn button_hover">Book Now</a>
                            </div>
                            <a href={"#"}><h4 className="sec_h4">Double Deluxe Room</h4></a>
                            <h5>$250<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={require('./images/room2.jpg')} alt="" />
                                <a href={"#"} className="theme_btn button_hover">Book Now</a>
                            </div>
                            <a href={"#"}><h4 className="sec_h4">Single Deluxe Room</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={require('./images/room3.jpg')} alt="" />
                                <a href={"#"} className="theme_btn button_hover">Book Now</a>
                            </div>
                            <a href={"#"}><h4 className="sec_h4">Honeymoon Suit</h4></a>
                            <h5>$750<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={require('./images/room4.jpg')} alt="" />
                                <a href={"#"} className="theme_btn button_hover">Book Now</a>
                            </div>
                            <a href={"#"}><h4 className="sec_h4">Economy Double</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="facilities_area section_gap">

                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">
                </div>
                <div className="container">
                    <div className="section_title text-center">
                        <br />
                        <h2 className="title_w">Royal Facilities</h2>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="row mb_30">
                        <div className="col-lg-4 col-md-6">
                            <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-dinner"></i>Restaurant</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-bicycle"></i>Sports CLub</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-shirt"></i>Swimming Pool</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-car"></i>Rent a Car</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-construction"></i>Gymnesium</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="facilities_item">
                                <h4 className="sec_h4"><i className="lnr lnr-coffee-cup"></i>Bar</h4>
                                <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="testimonial_area section_gap">
                <div className="container">
                    <div className="section_title text-center">
                        <br />
                        <h2 className="title_color">Testimonial from our Clients</h2>
                        <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
                    </div>
                    <div className="testimonial_slider owl-carousel">
                        <div className="media testimonial_item">
                            <img className="rounded-circle" src={require('./images/user.jpg')} alt="" />
                            <div className="media-body">
                                <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                <a href={"#"}><h4 className="sec_h4">Fanny Spencer</h4></a>
                                <div className="star">
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star-half-o"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="media testimonial_item">
                            <img className="rounded-circle" src={require('./images/user.jpg')} alt="" />
                            <div className="media-body">
                                <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                <a href={"#"}><h4 className="sec_h4">Fanny Spencer</h4></a>
                                <div className="star">
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star-half-o"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="media testimonial_item">
                            <img className="rounded-circle" src={require('./images/user.jpg')} alt="" />
                            <div className="media-body">
                                <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                <a href={"#"}><h4 className="sec_h4">Fanny Spencer</h4></a>
                                <div className="star">
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star-half-o"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="media testimonial_item">
                            <img className="rounded-circle" src={require('./images/user.jpg')} alt="" />
                            <div className="media-body">
                                <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                                <a href={"#"}><h4 className="sec_h4">Fanny Spencer</h4></a>
                                <div className="star">
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star"></i></a>
                                    <a href={"#"}><i className="fa fa-star-half-o"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stopover