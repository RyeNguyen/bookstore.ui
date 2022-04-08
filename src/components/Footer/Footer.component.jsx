import React from "react";
import { m } from "framer-motion";

import Logo from "../../assets/images/logo--secondary.svg";
import Facebook from "../../assets/icons/icon-fb.svg";
import Instagram from "../../assets/icons/icon-insta.svg";
import Discord from "../../assets/icons/icon-discord.svg";
import Github from "../../assets/icons/icon-github.svg";

import "./Footer.styles.scss";

const separatorVariants = {
  hidden: { height: 0 },
  visible: { height: "75%", transition: { delay: 0.3, duration: 0.5 } },
};

const Footer = () => (
  <div className="footer">
    <div className="footer--left">
      <div className="footer__logo">
        <img src={Logo} alt="footer-logo" />
      </div>
      <div>Khám phá vô vàn thế giới thông qua ngòi bút của từng tác giả.</div>

      <div className="footer__contact">
        <div style={{ fontWeight: "bold" }}>Liên hệ với chúng tôi</div>
        <div className="footer__contact-links">
          <div className="footer__contact-link-col">
            <a href="#" className="footer__contact-link">
              <img src={Facebook} alt="facebook-icon" />
              <span>Facebook</span>
            </a>

            <a href="#" className="footer__contact-link">
              <img src={Instagram} alt="instagram-icon" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="footer__contact-link-col">
            <a href="#" className="footer__contact-link">
              <img src={Discord} alt="discord-icon" />
              <span>Discord</span>
            </a>

            <a href="#" className="footer__contact-link">
              <img src={Github} alt="github-icon" />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <m.div
      variants={separatorVariants}
      initial="hidden"
      animate="visible"
      className="footer__separator left"
    />
    <m.div
      variants={separatorVariants}
      initial="hidden"
      whileInView="visible"
      className="footer__separator right"
    />

    <div className="footer--right">
      <div className="footer__column">
        <a href="#">Giới thiệu</a>
        <a href="#">Hỏi và đáp</a>
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Chính sách vận chuyển</a>
      </div>

      <div className="footer__column">
        <a href="#">Hình thức thanh toán</a>
        <a href="#">Quy định đổi, trả và hủy đơn hàng</a>
        <a href="#">Hướng dẫn đặt hàng</a>
        <a href="#">Liên hệ</a>
        <a href="#">Thông báo</a>
      </div>
    </div>
  </div>
);

export default Footer;
