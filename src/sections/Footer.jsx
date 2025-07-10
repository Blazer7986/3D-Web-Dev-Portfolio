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
              <a
                href={
                  socialImg.name === "Business Email"
                    ? `mailto:${socialImg.linkPath}`
                    : socialImg.linkPath
                }
                target="_blank"
              >
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Vianey Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
