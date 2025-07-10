import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center md:items-start items-center">
          <p>Visit my blog</p>
        </div>

        {/* MIDDLE */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Adrian Hajdin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
