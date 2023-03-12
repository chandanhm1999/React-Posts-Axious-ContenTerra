import React from "react";
import "./footer.css"

export const Footer = () => {
  return (
    <div>
        <footer className="cardfooter">
            <div className="news">
                Newsletter
            </div>
            <div>
                <input className="searching" type="search" placeholder="SUBSCRIBE" />
            </div>
            <div className="cardfooter2">
                <div className="copy">
                    Copyright © 2023- C-devops!
                </div>
            </div>
        </footer>
    </div>
  )
};