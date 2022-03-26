import React from "react";

export default function FixedScreen() {
  return (
    <div className="flex-shrink-0 max-w-7xl">
      <img
        className="fixed 2xl:bg"
        style={{ left: "16%", height: 202, width: 56 }}
        src={require("../Assets/ramdanLogo.png")}
      />
      <img
        className="fixed"
        style={{ left: "21.5%", height: 151, width: 53 }}
        src={require("../Assets/second_lft_ramadan.png")}
      />
      <img
        className="fixed "
        style={{ left: "27%", width: 400, height: 52 }}
        src={require("../Assets/starrs.png")}
      />
         <img
        className="fixed "
        style={{ right: "14%",top:"3%" ,width: 142, height: 25 }}
        src={require("../Assets/logo4-white.png")}
      />
      <img
        className="fixed bottom-56 left-24"
        style={{ left: "18%", width: 120, height: 117, bottom: "12%" }}
        src={require("../Assets/MOON.png")}
      />
      <img
        className="fixed  bottom-0"
        style={{ left: "1%", width: 162, height: 81 }}
        src={require("../Assets/bottom_decore.png")}
      />
      <img
        className="fixed  right-0"
        style={{ width: 60, height: 120, top: "32%" }}
        src={require("../Assets/left_decor.png")}
      />
    </div>
  );
}
