import React from "react";
import ShopWomens from "assets/shopWomens.jpg";
import ShopMens from "assets/shopMens.jpg";
import "./styles.scss";

function Directory() {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomens})`,
          }}
        >
          <a className="shopBtn" href="/">
            {" "}
            Shop Womans
          </a>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMens})`,
          }}
        >
          <a href="/"> Shop Mens</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
