import moolLogo from "../../Assets/mool-light.png";
import insta from "../../Assets/insta.png";
import fb from "../../Assets/fb.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#0A0E1C] px-8">
      <div>
        <img src={moolLogo} alt="" className="h-6 w-28 mb-4" />
        <p className="text-white text-justify text-sm">
          Mool is a leading financial startup that aims to create a sustainable
          solution for corporate employees by facilitating effective tax
          planning, smart investments, insurance, and borrowing options. Mool
          simplifies the personal financial and taxation jargon and makes it
          accessible to all. With the products of Mool, organizations and
          employees can now maximize the value of their salaries without a
          hassle. Mool’s mission is to create a platform to educate everyone,
          optimize the growth of their money, and empower them with rich facts
          and proven analysis for decision making.
        </p>
        <p className="text-white mt-4 text-sm font-thin">Get in touch</p>
        <a
          href="mailto:support@moolfinance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary no-underline text-sm"
        >
          support@moolfinance.com
        </a>
        <div className="flex align-center justify-start mt-2">
          <img src={linkedin} alt="" className="h-7 w-7 mr-2 hover:scale-95" />
          <img src={fb} alt="" className="h-7 w-7 mr-2 hover:scale-95" />
          <img src={insta} alt="" className="h-7 w-6 mr-2 hover:scale-95" />
          <img src={twitter} alt="" className="h-8 w-8 mr-2 hover:scale-95" />
        </div>
      </div>
      <div className="text-white">
        <div className="mt-4">
          <h3 className="font-bold text-xl">Products</h3>
          <p className="font-light text-base">Vetan</p>
          <p className="font-light text-base">Lekhakar</p>
          <p className="font-light text-base">Jann</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-xl">Pages</h3>
          <p className="font-light text-base">About us</p>
          <p className="font-light text-base">Contact us</p>
          <p className="font-light text-base">Link</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-xl">Resources</h3>
          <p className="font-light text-base">Calculator</p>
          <p className="font-light text-base">News & Media</p>
          <p className="font-light text-base">Blogs</p>
        </div>
      </div>
      <div className="h-px bg-[#B1B2B6] my-1 mt-8"></div>
      <p className="text-white  pb-2">Made with 💖 by mool team</p>
    </div>
  );
};

export default Footer;
