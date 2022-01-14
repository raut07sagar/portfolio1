import React from "react";

import { Row, Col } from "react-flexbox-grid";
import babusoftLogo from "../../assets/imgs/babusoft.png";
import ayinQophLogo from "../../assets/imgs/ayin_qoph.png";

function Footer() {
  return (
    <footer>
      <div className="content" >
        <Row center="xs" middle="xs">
          <Col xs={4}>
            {/* <img src="https://cdn-icons-png.flaticon.com/128/321/321238.png" className="content_logo" alt="ayin_qoph"/> */}
            
          </Col>
          <Col xs={8} className="techfolio_copyright">Techfolio ©2021 Design by –– Sagar Raut</Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
