import React from "react";
import "./Copyright.css";
function Copyright() {
  return (
    <div>
      <div className="footer-style">
        Copyright © Himanshu Chauhan, Nathaniel Padhiar & Onkar Sinha &nbsp;{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Copyright;
