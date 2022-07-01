import React from 'react'
import './style.css'

function Rent() {
  return (
    <div>
      <div className="tm-page-wrap mx-auto">
        <section className="tm-banner">
          <div className="tm-container-outer tm-banner-bg">
            <div className="container">

              <div className="row tm-banner-row tm-banner-row-header">
                <div className="col-xs-12">
                  <div className="tm-banner-header">
                    <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                    <img src={require("./images/dots-3.png")} alt="Dots" />
                    <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                    {/* <a href="#" className="tm-down-arrow-link"><i className="fa fa-2x fa-angle-down tm-down-arrow"></i></a> */}
                  </div>
                </div>
                {/* <!-- col-xs-12 --> */}
              </div>
              {/* <!-- row --> */}
              <div className="row tm-banner-row" id="tm-section-search">

                <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                      <label htmlFor="inputCity">Choose Your Destination</label>
                      <input name="destination" type="text" className="form-control" id="inputCity" placeholder="Type your destination..." />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-1">
                      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                        <label htmlFor="inputRoom">How many dress?</label>
                        <select name="room" className="form-control tm-select" id="inputRoom">
                          <option value="1" defaultValue={"1 Dress"}>1 Dress</option>
                          <option value="2">2 Dress</option>
                          <option value="3">3 Dress</option>
                          <option value="4">4 Dress</option>
                          <option value="5">5 Dress</option>
                          <option value="6">6 Dress</option>
                          <option value="7">7 Dress</option>
                          <option value="8">8 Dress</option>
                          <option value="9">9 Dress</option>
                          <option value="10">10 Dress</option>
                        </select>
                      </div>
                      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputAdult">Adult</label>
                        <select name="adult" className="form-control tm-select" id="inputAdult">
                          <option value="1" defaultValue={"1"}>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">

                        <label htmlFor="inputChildren">Children</label>
                        <select name="children" className="form-control tm-select" id="inputChildren">
                          <option value="0" defaultValue={"0"}>0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* <!-- form-row --> */}
                  <div className="form-row tm-search-form-row">

                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                      <label htmlFor="inputCheckIn">Check In Date</label>
                      <input name="check-in" type="date" className="form-control" id="inputCheckIn" placeholder="Check In" />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                      <label htmlFor="inputCheckOut">Check Out Date</label>
                      <input name="check-out" type="date" className="form-control" id="inputCheckOut" placeholder="Check Out" />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                      <label htmlFor="btnSubmit">&nbsp;</label>
                      <button type="submit" className="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit">Check Availability</button>
                    </div>
                  </div>
                </form>

              </div>
              {/* <!-- row --> */}
              <div className="tm-banner-overlay"></div>
            </div>
            {/* <!-- .container --> */}
          </div>
          {/* <!-- .tm-container-outer --> */}
        </section>

        <section className="p-5 tm-container-outer tm-bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
                <h2 className="text-uppercase mb-4">Your <strong>Journey</strong> is our priority</h2>
                <p className="mb-4" style={{color:"black"}}>Nullam auctor, sapien sit amet lacinia euismod, lorem magna lobortis massa, in tincidunt mi metus quis lectus. Duis nec lobortis velit. Vivamus id magna vulputate, tempor ante eget, tempus augue. Maecenas ultricies neque magna.</p>
                <a href="#" className="text-uppercase btn-primary tm-btn">Continue explore</a>
              </div>
            </div>
          </div>
        </section>

        <div className="tm-container-outer" id="tm-section-2">
          <section className="tm-slideshow-section">
            <div className="tm-slideshow">
              <img src={require("./images/skiiDress.png")} alt="Image" />
            </div>
            <div className="tm-slideshow-description tm-bg-primary">
              <h2 className="">The most rented skii dress</h2>
              <p>Aenean in lacus nec dolor fermentum congue. Maecenas ut velit pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non pulvinar id, sagittis eget diam.</p>
              <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
            </div>
          </section>
          <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse">

            <div className="tm-right tm-slideshow tm-slideshow-highlight">
              <img src={require("./images/boardDress.png")} alt="Image" />
            </div>

            <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
              <h2 className="">The most rented board dress</h2>
              <p>Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu. Donec sagittis mattis pharetra. Proin commodo, ante et volutpat pulvinar, arcu arcu ullamcorper diam, id maximus sem tellus id sem. Suspendisse eget rhoncus diam. Fusce urna elit, porta nec ullamcorper id.</p>
              <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight">Continue Reading</a>
            </div>

          </section>
          <section className="tm-slideshow-section">
            <div className="tm-slideshow">
              <img src={require("./images/allDress.png")} alt="Image" />
            </div>
            <div className="tm-slideshow-description tm-bg-primary">
              <h2 className="">The most rented travel dress</h2>
              <p>Donec nec laoreet diam, at vehicula ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nec dapibus nunc, quis viverra metus. Morbi eget diam gravida, euismod magna vel, tempor urna.</p>
              <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
            </div>
          </section>
        </div>
        <div className="tm-container-outer" id="tm-section-3">
          <ul className="nav nav-pills tm-tabs-links">
            <li className="tm-tab-link-li">
              <a href="#1a" data-toggle="tab" className="tm-tab-link">
                <img src={require("./images/skii.png")} alt="Image" className="img-skii" />
               Skii 
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#2a" data-toggle="tab" className="tm-tab-link">
                <img src={require("./images/board.png")} alt="Image" className="img-skii" />
                Board
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#3a" data-toggle="tab" className="tm-tab-link">
                <img src={require("./images/paten.png")} alt="Image" className="img-skii" />
                Paten
              </a>
            </li>
          </ul>
          <div className="tab-content clearfix">
            {/* <!-- Tab 4 --> */}
            <div className="tab-pane fade show active" id="4a">
              {/* <!-- Current Active Tab WITH "show active" classNamees in DIV tag --> */}
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img src={require("./images/skii.png")} alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Skii Full Equipment </h3>
                    <p className="tm-text-highlight">Singapore</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$440</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src={require("./images/board.png")} alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Board Full Equipment</h3>
                    <p className="tm-text-highlight">Yangon, Myanmar</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <div id="preload-hover-img"></div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$450</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src={require("./images/paten.png")} alt="Image" className="img-skii tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Paten Full Equipment</h3>
                    <p className="tm-text-highlight">Bangkok, Thailand</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$460</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Lorem ipsum dolor sit</h3>
                    <p className="tm-text-highlight">Vientiane, Laos</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$470</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>

              <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
            </div>
            {/* <!-- tab-pane --> */}

            {/* <!-- Tab 5 --> */}
            <div className="tab-pane fade" id="5a">

              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Africa Resort Hotel</h3>
                    <p className="tm-text-highlight">First City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$550</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Aenean ac magna diam</h3>
                    <p className="tm-text-highlight">Second City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$560</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Beach Barbecue Sunset</h3>
                    <p className="tm-text-highlight">Third City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$570</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">Fourth City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$580</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>

              <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
            </div>
            {/* <!-- tab-pane --> */}

            {/* <!-- Tab 6 --> */}
            <div className="tab-pane fade" id="6a">

              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Hotel Australia</h3>
                    <p className="tm-text-highlight">City One</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$660</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Proin interdum ullamcorper</h3>
                    <p className="tm-text-highlight">City Two</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$650</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Beach Barbecue Sunset</h3>
                    <p className="tm-text-highlight">City Three</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$640</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">City Four</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$630</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>

              <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
            </div>
            {/* <!-- tab-pane --> */}

            {/* <!-- Tab 7 --> */}
            <div className="tab-pane fade" id="7a">

              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img src="img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Antartica Resort</h3>
                    <p className="tm-text-highlight">Ant City One</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$770</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Pulvinar Semper</h3>
                    <p className="tm-text-highlight">Ant City Two</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$230</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Cras vel sapien</h3>
                    <p className="tm-text-highlight">Ant City Three</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$140</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Nullam eget est</h3>
                    <p className="tm-text-highlight">Ant City Four</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$190</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>

              <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
            </div>
            {/* <!-- tab-pane --> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Rent