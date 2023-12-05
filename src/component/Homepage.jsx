import React from "react";
import banner from "../img/Banner_Homepage3_1920x900_6deacc2839.webp"

const Homepage = () => {
    return (
        <>
            <title></title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link
                rel="stylesheet"
                href="https://www.w3schools.com/lib/w3-theme-black.css"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            {/* Sidebar on click */}
            <nav
                className="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xxlarge"
                style={{ display: "none", zIndex: 2 }}
                id="mySidebar"
            >
                <a
                    href="javascript:void(0)"
                    onclick="w3_close()"
                    className="w3-bar-item w3-button w3-display-topright w3-text-teal"
                >
                    Close
                    <i className="fa fa-remove" />
                </a>
                <a href="#" className="w3-bar-item w3-button">
                    Link 1
                </a>
                <a href="#" className="w3-bar-item w3-button">
                    Link 2
                </a>
                <a href="#" className="w3-bar-item w3-button">
                    Link 3
                </a>
                <a href="#" className="w3-bar-item w3-button">
                    Link 4
                </a>
                <a href="#" className="w3-bar-item w3-button">
                    Link 5
                </a>
            </nav>
            {/* Navbar */}
            <div className="w3-top">
                <div className="w3-bar w3-theme-d2 p-3 d-flex justify-content-between">
                    <a
                        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
                        href="javascript:void(0);"
                        onclick="openNav()"
                    >
                        <i className="fa fa-bars" />
                    </a>
                    <a href="#" className="w3-bar-item btn w3-theme-d2 fs-4">
                        <i className="fa fa-home w3-margin-right" />
                        NHP SHIP
                    </a>
                    <div className="w3-dropdown-hover w3-hide-small">
                        <p className="btn w3-theme-d2 fs-4" title="Notifications">
                            Dịch vụ <i className="fa fa-caret-down" />
                        </p>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Dịch vụ giao hàng
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Doanh nghiệp
                            </a>

                        </div>
                    </div>
                    <div className="w3-dropdown-hover w3-hide-small">
                        <p className="btn w3-theme-d2 fs-4" title="Notifications">
                            Khách hàng <i className="fa fa-caret-down" />
                        </p>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Khách hàng cá nhân
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Khách hàng doanh nghiệp
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Cộng đồng khách hàng
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Trung tâm hỗ trợ
                            </a>
                        </div>
                    </div>
                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="btn w3-theme-d2 fs-4" title="Notifications">
                            Tài xế <i className="fa fa-caret-down" />
                        </button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Đăng ký tài xế
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Cẩm nang tài xế
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Cộng đồng tài xế
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Trung tâm hỗ trợ
                            </a>
                        </div>
                    </div>
                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="btn w3-theme-d2 fs-4" title="Notifications">
                            Tuyển dụng <i className="fa fa-caret-down" />
                        </button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Về chúng tôi
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Gia nhập ngay
                            </a>

                        </div>
                    </div>
                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="btn w3-theme-d2 fs-4" title="Notifications">
                            Tin tức <i className="fa fa-caret-down" />
                        </button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Tin tức
                            </a>
                            <a href="#" className="w3-bar-item w3-button fs-5">
                                Báo cáo
                            </a>

                        </div>
                    </div>
                    <div>
                        <a href="#" type="button" className="btn text-white fs-4">Đặt ngay</a>
                    </div>
                    {/* <a
                        href="#"
                        className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal"
                        title="Search"
                    >
                        <i className="fa fa-search" />
                    </a> */}
                </div>
                {/* Navbar on small screens */}
                <div
                    id="navDemo"
                    className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium"
                >
                    <a href="#team" className="w3-bar-item w3-button">
                        Team
                    </a>
                    <a href="#work" className="w3-bar-item w3-button">
                        Work
                    </a>
                    <a href="#pricing" className="w3-bar-item w3-button">
                        Price
                    </a>
                    <a href="#contact" className="w3-bar-item w3-button">
                        Contact
                    </a>
                    <a href="#" className="w3-bar-item w3-button">
                        Search
                    </a>
                </div>
            </div>
            {/* Image Header */}
            <div className="w3-display-container w3-animate-opacity">
                <img
                    src={banner}
                    alt="boat"
                    style={{ width: "100%", minHeight: 350, maxHeight: 600 }}
                />

            </div>
            {/* Modal */}
            <div id="id01" className="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-top">
                    <header className="w3-container w3-teal w3-display-container">
                        <span
                            onclick="document.getElementById('id01').style.display='none'"
                            className="w3-button w3-teal w3-display-topright"
                        >
                            <i className="fa fa-remove" />
                        </span>
                        <h4>Oh snap! We just showed you a modal..</h4>
                        <h5>
                            Because we can <i className="fa fa-smile-o" />
                        </h5>
                    </header>
                    <div className="w3-container">
                        <p>Cool huh? Ok, enough teasing around..</p>
                        <p>
                            Go to our{" "}
                            <a className="w3-text-teal" href="/w3css/default.asp">
                                W3.CSS Tutorial
                            </a>{" "}
                            to learn more!
                        </p>
                    </div>
                    <footer className="w3-container w3-teal">
                        <p>Modal footer</p>
                    </footer>
                </div>
            </div>
            {/* Team Container */}
            <div className="w3-container w3-padding-64 w3-center" id="team">
                <h2>ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
                <div className="w3-row">
                    <br />
                    <div className="w3-third">
                        <img
                            src="/w3images/avatar.jpg"
                            alt="Boss"
                            style={{ width: "45%" }}
                            className="w3-circle w3-hover-opacity"
                        />
                        <h3>Phan Đình Thành Nhân</h3>
                        <p>Team Lead</p>
                    </div>
                    <div className="w3-third">
                        <img
                            src="/w3images/avatar.jpg"
                            alt="Boss"
                            style={{ width: "45%" }}
                            className="w3-circle w3-hover-opacity"
                        />
                        <h3>Nguyễn Quốc Phú</h3>
                        <p>Web designer</p>
                    </div>
                    <div className="w3-third">
                        <img
                            src="/w3images/avatar.jpg"
                            alt="Boss"
                            style={{ width: "45%" }}
                            className="w3-circle w3-hover-opacity"
                        />
                        <h3>Lê Vũ Minh Hưng</h3>
                        <p>Collaborator</p>
                    </div>

                </div>
            </div>

            <div className="w3-container" style={{ position: "relative" }}>
                <a
                    onclick="w3_open()"
                    className="w3-button w3-xlarge w3-circle w3-teal"
                    style={{ position: "absolute", top: "-28px", right: 24 }}
                >
                    +
                </a>
            </div>
            {/* Pricing Row */}
            <div className="w3-row-padding w3-center w3-padding-64" id="pricing">
                <h2>Giá dịch vụ</h2>
                <br />
                <div className="w3-third w3-margin-bottom">
                    <ul className="w3-ul w3-border w3-hover-shadow">
                        <li className="w3-theme">
                            <p className="w3-xlarge">Siêu tốc - đồ ăn</p>
                        </li>
                        <li className="w3-padding-16">
                            <b>Giao siêu nhanh</b>
                        </li>
                        <li className="w3-padding-16">
                            <b>30 phút</b> trong nội thành
                        </li>

                        <li className="w3-padding-16">
                            <h2 className="w3-wide">
                                <i className="fa fa-usd" /> 16,000 VND
                            </h2>
                            <span className="w3-opacity">2km đầu</span>
                        </li>
                        <li className="w3-theme-l5 w3-padding-24">
                            <button className="w3-button w3-teal w3-padding-large">
                                <i className="fa fa-check" /> Đặt ngay
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="w3-third w3-margin-bottom">
                    <ul className="w3-ul w3-border w3-hover-shadow">
                        <li className="w3-theme">
                            <p className="w3-xlarge">Siêu tốc</p>
                        </li>
                        <li className="w3-padding-16">
                            <b>Giao nhanh</b>
                        </li>
                        <li className="w3-padding-16">
                            <b>Trong vòng 1h</b> trong nội thành
                        </li>

                        <li className="w3-padding-16">
                            <h2 className="w3-wide">
                                <i className="fa fa-usd" /> 20,000 VND
                            </h2>
                            <span className="w3-opacity">3km đầu</span>
                        </li>
                        <li className="w3-theme-l5 w3-padding-24">
                            <button className="w3-button w3-teal w3-padding-large">
                                <i className="fa fa-check" /> Đặt ngay
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="w3-third w3-margin-bottom">
                    <ul className="w3-ul w3-border w3-hover-shadow">
                        <li className="w3-theme">
                            <p className="w3-xlarge">2h</p>
                        </li>
                        <li className="w3-padding-16">
                            <b>Giao nhanh</b>
                        </li>
                        <li className="w3-padding-16">
                            <b>Trong vòng 2h</b>
                        </li>

                        <li className="w3-padding-16">
                            <h2 className="w3-wide">
                                <i className="fa fa-usd" /> 20,000 VND
                            </h2>
                            <span className="w3-opacity">4km đầu</span>
                        </li>
                        <li className="w3-theme-l5 w3-padding-24">
                            <button className="w3-button w3-teal w3-padding-large">
                                <i className="fa fa-check" /> Đặt ngay
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Contact Container */}
            <div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
                <div className="w3-row">
                    <div className="w3-col m5">
                        <div className="w3-padding-16">
                            <span className="w3-xlarge w3-border-teal w3-bottombar">
                                Contact Us
                            </span>
                        </div>
                        <h3>Address</h3>
                        <p>Swing by for a cup of coffee, or whatever.</p>
                        <p>
                            <i className="fa fa-map-marker w3-text-teal w3-xlarge" />
                            &nbsp;&nbsp;Chicago, US
                        </p>
                        <p>
                            <i className="fa fa-phone w3-text-teal w3-xlarge" />
                            &nbsp;&nbsp;+00 1515151515
                        </p>
                        <p>
                            <i className="fa fa-envelope-o w3-text-teal w3-xlarge" />
                            &nbsp;&nbsp;test@test.com
                        </p>
                    </div>
                    <div className="w3-col m7">
                        <form
                            className="w3-container w3-card-4 w3-padding-16 w3-white"
                            action="/action_page.php"
                            target="_blank"
                        >
                            <div className="w3-section">
                                <label>Name</label>
                                <input className="w3-input" type="text" name="Name" required="" />
                            </div>
                            <div className="w3-section">
                                <label>Email</label>
                                <input className="w3-input" type="text" name="Email" required="" />
                            </div>
                            <div className="w3-section">
                                <label>Message</label>
                                <input
                                    className="w3-input"
                                    type="text"
                                    name="Message"
                                    required=""
                                />
                            </div>
                            <input
                                className="w3-check"
                                type="checkbox"
                                defaultChecked=""
                                name="Like"
                            />
                            <label>I Like it!</label>
                            <button type="submit" className="w3-button w3-right w3-theme">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Image of location/map */}
            <img
                src="/w3images/map.jpg"
                className="w3-image w3-greyscale-min"
                style={{ width: "100%" }}
            />
            {/* Footer */}
            <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
                <h4>Follow Us</h4>
                <a
                    className="w3-button w3-large w3-teal"
                    href="javascript:void(0)"
                    title="Facebook"
                >
                    <i className="fa fa-facebook" />
                </a>
                <a
                    className="w3-button w3-large w3-teal"
                    href="javascript:void(0)"
                    title="Twitter"
                >
                    <i className="fa fa-twitter" />
                </a>
                <a
                    className="w3-button w3-large w3-teal"
                    href="javascript:void(0)"
                    title="Google +"
                >
                    <i className="fa fa-google-plus" />
                </a>
                <a
                    className="w3-button w3-large w3-teal"
                    href="javascript:void(0)"
                    title="Google +"
                >
                    <i className="fa fa-instagram" />
                </a>
                <a
                    className="w3-button w3-large w3-teal w3-hide-small"
                    href="javascript:void(0)"
                    title="Linkedin"
                >
                    <i className="fa fa-linkedin" />
                </a>
                <p>
                    Powered by{" "}
                    <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
                        w3.css
                    </a>
                </p>
                <div
                    style={{ position: "relative", bottom: 100, zIndex: 1 }}
                    className="w3-tooltip w3-right"
                >
                    <span className="w3-text w3-padding w3-teal w3-hide-small">
                        Go To Top
                    </span>
                    <a className="w3-button w3-theme" href="#myPage">
                        <span className="w3-xlarge">
                            <i className="fa fa-chevron-circle-up" />
                        </span>
                    </a>
                </div>
            </footer>
        </>

    )
}

export default Homepage;