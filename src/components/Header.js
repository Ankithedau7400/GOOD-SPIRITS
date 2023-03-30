import React from "react";
import "../css/Header.css";
import logo from "../assets/logo.png";
function Header() {
    return (
        <section className="container">
            <div className="header flex">
                <div className="left-logo flex">
                    <i
                        class="fa-solid fa-dove"
                        style={{ color: "#fafafa" }}
                    ></i>
                    <h3>GOOD SPIRITS</h3>
                </div>
                <div className="right-nav">
                    <ul className="nav-links flex">
                        <a href="#">
                            <li>About</li>
                        </a>{" "}
                        <a href="#">
                            <li>Service</li>
                        </a>
                        <a href="#">
                            <li>Donate</li>
                        </a>{" "}
                        <a href="#">
                            <li>Contact</li>
                        </a>
                        <a href="#" className="button1">
                            <li>SIGN IN</li>
                        </a>
                        <a href="#" className="button1">
                            <li>SIGN UP</li>
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Header;
