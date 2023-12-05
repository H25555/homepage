import React from "react";
import banner from "../img/Banner_Homepage3_1920x900_6deacc2839.webp";
import { Link } from "react-router-dom";

const Driverpage = () => {
    return (
        <>
            <title></title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Raleway"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", Arial, Helvetica, sans-serif}\n'
                }}
            />
            {/* Navigation Bar */}

            <div className="w3-bar w3-theme-d2 p-3 d-flex justify-content-between bg-black">
                <a
                    className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
                    href="javascript:void(0);"
                    onclick="openNav()"
                >
                    <i className="fa fa-bars" />
                </a>
                <Link to="/" className="w3-bar-item btn w3-theme-d2 fs-4 text-white">
                    <i className="fa fa-home w3-margin-right" />
                    NHP SHIP
                </Link>
                <div className="w3-dropdown-hover w3-hide-small ">
                    <p className="btn w3-theme-d2 fs-4  text-light" title="Notifications">
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
                    <p className="btn w3-theme-d2 fs-4 text-light" title="Notifications">
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
                    <button className="btn w3-theme-d2 fs-4 text-light" title="Notifications">
                        Tài xế <i className="fa fa-caret-down" />
                    </button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <Link to="/driver-register" className="w3-bar-item w3-button fs-5">
                            Đăng ký tài xế
                        </Link>
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
                    <button className="btn w3-theme-d2 fs-4 text-light" title="Notifications">
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
                    <button className="btn w3-theme-d2 fs-4 text-light" title="Notifications">
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


            {/* Header */}
            <header
                className="w3-display-container w3-content"
                style={{ maxWidth: 2000 }}
            >
                <div className="w3-display-container w3-animate-opacity">
                    <img
                        src={banner}
                        alt="boat"
                        style={{ width: "100%", minHeight: 350, maxHeight: 600 }}
                    />

                </div>
                <div className="w3-display-left w3-padding w3-col l6 m8">
                    <div className="w3-container bg-light">
                        <h2>
                            Đăng ký trở thành tài xế
                        </h2>
                    </div>
                    <div className="w3-container w3-white w3-padding-16">
                        <form action="/action_page.php" target="_blank">
                            <div className="w3-row-padding" >
                                <div className="w3-full w3-margin-bottom">
                                    <input
                                        className="w3-input w3-border"
                                        type="text"
                                        placeholder="Họ và tên"
                                        name="CheckIn"
                                        required=""
                                    />
                                </div>

                            </div>
                            <div className="w3-row-padding" >
                                <div className="w3-full w3-margin-bottom">
                                    <input
                                        className="w3-input w3-border"
                                        type="text"
                                        placeholder="Số điện thoại"
                                        name="CheckIn"
                                        required=""
                                    />
                                </div>

                            </div>
                            <div className="w3-row-padding" >
                                <div className="w3-full w3-margin-bottom">
                                    <input
                                        className="w3-input w3-border"
                                        type="text"
                                        placeholder="Email"
                                        name="CheckIn"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="w3-row-padding" >
                                <div className="w3-full w3-margin-bottom">
                                    <input
                                        className="w3-input w3-border"
                                        type="text"
                                        placeholder="Thành phố"
                                        name="CheckIn"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="w3-row-padding" >
                                <div className="w3-full w3-margin-bottom">
                                    <input
                                        className="w3-input w3-border"
                                        type="text"
                                        placeholder="Quận huyện"
                                        name="CheckIn"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="w3-row-padding" >
                                <div className="w3-full w3-margin-bottom">
                                    <input
                                        className="w3-input w3-border"
                                        type="text"
                                        placeholder="Loại xe"
                                        name="CheckIn"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="w3-row-padding" >
                                <button className="w3-button w3-orange" type="submit">
                                    Gửi thông tin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
            {/* Page content */}
            <div className="w3-row-padding w3-center w3-padding-64 " id="pricing">
                <h1><b> Dành cho đối tác tài xế </b></h1>
                <br />
                <h5>Chương trình ưu đãi và quyền lợi</h5>
                <br />
                <div className="d-flex justify-content-around">
                    <div className="card w3-third w3-margin-bottom" style={{ width: "25rem", height: "25rem" }}>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder">Ưu đãi</h2>
                            <h6 >---------------------------------------------</h6>
                            <p className="card-text fs-4">
                                Tặng bạn vô vàn ưu đãi đa dạng về ăn uống, sửa chữa xe máy/xe tải, khám-chữa bệnh,...cực hấp dẫn khi trở thành Đối tác của NHP Ship.
                            </p>

                        </div>
                    </div>
                    <div className="card w3-third w3-margin-bottom" style={{ width: "25rem", height: "25rem" }}>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder">Chính sách thưởng
                            </h2>
                            <h6 >---------------------------------------------</h6>
                            <p className="card-text fs-4">
                                Cơ hội gia tăng thu nhập mỗi ngày với hàng ngàn chương trình thưởng hấp dẫn. Tại sao không?
                            </p>

                        </div>
                    </div>
                    <div className="card w3-third w3-margin-bottom" style={{ width: "25rem", height: "25rem" }}>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder">Bảo hiểm, tài chính</h2>
                            <h6 >---------------------------------------------</h6>
                            <p className="card-text fs-4">
                                Vững chắc tay lái, an tâm hơn khi giao hàng với bảo hiểm.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Image of location/map */}

            {/* Footer */}
            <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center bg-black ">
                <h4 className="text-light d-flex justify-content-center">Follow Us</h4>
                <div className="d-flex justify-content-center">
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
                </div>


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
            {/* Add Google Maps */}
            {/*
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
*/}
        </>

    )
}

export default Driverpage;