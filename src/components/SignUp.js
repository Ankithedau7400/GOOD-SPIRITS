import "../css/SignUp.css";

import React from "react";

function SignUp() {
    return (
        <div className="outer-box">
            <div
                className="left-logo flex container"
                style={{ paddingBlock: "13px", color: "white" }}
            >
                <i class="fa-solid fa-dove" style={{ color: "#fafafa" }}></i>
                <h3>GOOD SPIRITS</h3>
            </div>
            <div className="inner-box">
                <header className="signup-header">
                    <h1>Let's get you started</h1>
                </header>
                <main className="signup-body">
                    <form action="#">
                        <p>
                            <label for="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="Deepanshu Dodke"
                                required
                            ></input>
                        </p>
                        <p>
                            <label for="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="deepanshu@gmail.com"
                                required
                            ></input>
                        </p>
                        <p>
                            <label for="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="at least 8 character"
                                required
                            ></input>
                        </p>
                        <p>
                            <input
                                type="submit"
                                id="submit"
                                value="Create Account"
                            ></input>
                        </p>
                    </form>
                </main>
                <footer className="signup-footer">
                    <p>
                        Already have an account?<a href="#">Login</a>
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default SignUp;
