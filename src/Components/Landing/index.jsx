import Button from "../Buttons";
import hero1 from "../../Assets/hero_page_1.png";
import landing2 from "../../Assets/landing-2.png";
import landing3 from "../../Assets/landing-3.png";
import landing4 from "../../Assets/landing-4.png";
import grid1 from "../../Assets/landing-grid-1.png";
import grid2 from "../../Assets/landing-grid-2.png";
import grid3 from "../../Assets/landing-grid-3.png";
import grid4 from "../../Assets/landing-grid-4.png";
import cycle from "../../Assets/cycle.png";
import bike from "../../Assets/bike.png";
import car from "../../Assets/car.png";
import tata from "../../Assets/tata.png";
import amazon from "../../Assets/amazon.png";
import walmart from "../../Assets/walmart.png";
import ms from "../../Assets/ms.png";
import giLead from "../../Assets/gilead.png";
import cardBg from "../../Assets/bgCarousalCardBenefits.png";
import sliderDummy from "../../Assets/sliderDummy.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const Landing = () => {
  const [mail, setMail] = useState("");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const CustomArrow = ({ onClick, ...rest }) => {
  //   return (
  //     <button className="bg-primary h-10 w-10" onClick={() => onClick()}>
  //       Text
  //     </button>
  //   );
  // };

  const carousalData = [
    {
      image: sliderDummy,
      date: "11 October 2022",
      head: "Paying Rent? Know how HRA can save your taxes",
      desc: "A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. Their end-to-end automations saved us from so much headache in this last quarter.",
      link: "#",
    },
    {
      image: sliderDummy,
      date: "12 October 2022",
      head: "New head",
      desc: "A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. Their end-to-end automations saved us from so much headache in this last quarter.",
      link: "#",
    },
    {
      image: sliderDummy,
      date: "15 October 2022",
      head: "New head",
      desc: "A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. Their end-to-end automations saved us from so much headache in this last quarter.",
      link: "#",
    },
    {
      image: sliderDummy,
      date: "21 October 2022",
      head: "New head",
      desc: "A lot of our payroll related activity which we used to do manually on spreadsheets was automated by Mool Vetan. Their end-to-end automations saved us from so much headache in this last quarter.",
      link: "#",
    },
  ];

  return (
    <>
      {/* hero section */}
      <div className="flex flex-col pt-24">
        <p className=" px-8 text-5xl font-bold">
          India’s First <span className="text-primary">Tax Optimization</span>{" "}
          and <span className="text-primary">Salary Personalization</span>{" "}
          Software
        </p>
        <p className="font-thin text-lg px-8 mt-2">
          Harness the power of AI-driven pay structure automation and
          personalization to your payroll management systems. Save Taxes &
          Amplify Employee Payout at no extra cost
        </p>
        <Button
          buttonStyle="bg-primary text-white py-4 px-6 text-sm rounded-sm mt-6 mx-8"
          text="Request a demo"
        />
        <img src={hero1} alt="hero-1" className="mt-12 px-8" />
      </div>
      {/* Second Section */}
      <div className="flex align-center justify-center flex-col mt-24">
        <p className="px-8 text-5xl font-bold">
          Every person is different, so should be their{" "}
          <span className="text-primary ">taxes and payrolls</span> 🤩
        </p>
        <p className="font-medium text-lg px-8 mt-8">
          Add “human intelligence” to your payroll process.{" "}
        </p>
        <p className="font-thin text-lg px-8 mt-4">
          We all acknowledge that no two people are the same. Same is true for
          everyone’s financial needs. Why use the same old inefficient way of
          structuring your employees salary when you can personalise it with
          Mool!
        </p>
        <p className="font-medium text-lg px-8 mt-4">
          Say goodbye to inefficient salary structures! 🚀
        </p>
        <Button
          buttonStyle="bg-primary text-white py-4 px-6 text-sm rounded-sm mt-6 mx-8"
          text="Optimise your tax now"
        />
        <img src={landing2} alt="" className="mt-12 px-8" />
      </div>
      {/* Third Section */}
      <div className="flex align-center justify-center flex-col mt-24">
        <img src={landing3} alt="" className="hidden mt-12 px-8 mb-8" />
        <div className="bg-violet py-16">
          <p className="font-medium text-lg px-8">
            Why to switch just integrate
          </p>
          <p className="px-8 text-5xl font-bold my-4">
            Access{" "}
            <span className="text-primary">Sandbox of Opportunities</span>{" "}
          </p>
          <Button
            buttonStyle="bg-primary text-white py-4 px-6 text-sm rounded-sm mt-2 mx-8"
            text="Check mool sandbox"
          />
        </div>
      </div>
      {/* Fourth Section */}
      <div className="flex align-center justify-center flex-col mt-24">
        <div className="">
          <p className="px-8 text-5xl font-bold my-4">
            Cloud based platform for{" "}
            <span className="text-primary">Modern HR </span>&{" "}
            <span className="text-primary">Finance Teams</span>
          </p>
          <p className="font-thin text-lg px-8 mt-4">
            There’s power in choice! Built-in modularity in Mool systems offers
            you the flexibility of choosing the right tool for your
            organisation. Whether you need a full-stack of products or just a
            part of the innovative Mool system. Mool delivers.
          </p>
          <Button
            buttonStyle="bg-primary text-white py-4 px-6 text-sm rounded-sm mt-6 mx-8"
            text="Request a demo"
          />
        </div>
        <img src={landing4} alt="" className="mt-12 px-8" />
      </div>
      {/* Feature list */}
      <div className="flex align-center justify-center flex-col mt-8 px-8">
        <div className="bg-violet w-24 h-24 mt-16 flex rounded-lg">
          <img src={grid1} alt="" className="h-10 w-10 m-auto " />
        </div>
        <h5 className="text-3xl font-bold my-4">Salary Personalization</h5>
        <p className="font-thin text-xl">
          Maximize tax savings with our AI-based intelligent algorithms.
          Employees can gain upto 10% more in-hand salary without any additional
          cost to the company
        </p>
        <div className="bg-lightBlue w-24 h-24 mt-16 flex rounded-lg">
          <img src={grid2} alt="" className="h-6 w-5 m-auto" />
        </div>
        <h5 className="text-3xl font-bold my-4">HRMS</h5>
        <p className="font-thin text-xl">
          Maximize tax savings with our AI-based intelligent algorithms.
          Employees can gain upto 10% more in-hand salary without any additional
          cost to the company
        </p>
        <div className="bg-lightOrange w-24 h-24 mt-16 flex rounded-lg">
          <img src={grid3} alt="" className="h-6 w-6 m-auto" />
        </div>
        <h5 className="text-3xl font-bold my-4">Compliance Automation</h5>
        <p className="font-thin text-xl">
          Maximize tax savings with our AI-based intelligent algorithms.
          Employees can gain upto 10% more in-hand salary without any additional
          cost to the company Quick & Easy PF, PT, TDS, ESI & LWF calculations.
          Automated TDS, Salary, PF reports and more
        </p>
        <div className="bg-lightGreen w-24 h-24 mt-16 flex rounded-lg">
          <img src={grid4} alt="" className="h-6 w-6 m-auto" />
        </div>
        <h5 className="text-3xl font-bold my-4">Payout Management</h5>
        <p className="font-thin text-xl">
          Bringing an end to manual workflows. Automated Payroll Payout
          Management Automated Vendor Payout Management
        </p>
        {/* <Button
          buttonStyle="bg-primary text-white py-4 px-6 text-sm rounded-sm mt-6 mx-8"
          text="Request a demo"
        /> */}
      </div>
      {/* Singe info */}
      <div className="bg-secondary text-white text-lg mx-8 px-6 py-4 text-center my-16">
        No IT Implementation. <br /> Get onboarded in minutes.
      </div>
      {/* card implementations */}
      <div className="flex align-center justify-center flex-col mt-24 mx-8">
        <div className="bg-navyBlue px-8 py-10 mt-8">
          <div className="flex justify-start align-center">
            <div className="bg-cycleBg px-6 py-6 rounded-xl">
              <img src={cycle} alt="cycle" className="h-6 w-8" />
            </div>
            <p className="text-white font-semibold my-auto ml-4 text-2xl">
              Mool for <span className="text-secondary">Startups</span>
            </p>
          </div>
          <p className="font-thin text-lg text-white mt-6">
            I’m a growing startup with 100 employees. Vendor management and
            payroll automation are one of my biggest challenges. Can Mool help?
          </p>
          <ul className="list-disc px-4 mt-4 text-white">
            <li>Employee & Vendor Payout Management</li>
            <li>Leave & Attendance Management</li>
            <li>Salary Personalization </li>
            <li>CTC Calculator </li>
            <li>Employee Onboarding</li>
          </ul>
          <Button
            buttonStyle="bg-secondary text-white py-4 px-4 text-xlg rounded-sm mt-6"
            text="Get onboarded in minutes"
          />
        </div>
        <div className="bg-navyBlue px-8 py-10 mt-8">
          <div className="flex justify-start align-center">
            <div className="bg-cycleBg px-6 py-6 rounded-xl">
              <img src={bike} alt="cycle" className="h-6 w-8" />
            </div>
            <p className="text-white font-semibold my-auto ml-4 text-2xl">
              Mool for <span className="text-secondary">MSMEs</span>
            </p>
          </div>
          <p className="font-thin text-lg text-white mt-6">
            I’m a medium enterprise with 500+ employees. I already have an ERP
            but need help with automating some of my HR, payroll and compliance
            functions
          </p>
          <ul className="list-disc px-4 mt-4 text-white">
            <li>Integrations for HRMS </li>
            <li>Automated Employee & Vendor Payouts </li>
            <li>Automated Compliance Reporting </li>
            <li>Tax Savings & CTC Calculator </li>
            <li>Salary Personalization</li>
          </ul>
          <Button
            buttonStyle="bg-secondary text-white py-4 px-4 text-xlg rounded-sm mt-6"
            text="Start with free trial"
          />
        </div>
        <div className="bg-navyBlue px-8 py-10 mt-8">
          <div className="flex justify-start align-center">
            <div className="bg-cycleBg px-6 py-6 rounded-xl">
              <img src={car} alt="cycle" className="h-6 w-10" />
            </div>
            <p className="text-white font-semibold my-auto ml-4 text-2xl">
              Mool for <span className="text-secondary">Enterprises</span>
            </p>
          </div>
          <p className="font-thin text-lg text-white mt-6">
            I’m a large enterprise with 1000+ employees. I have most systems in
            place but Mool’s salary personalization tool will add value to my
            organisation.
          </p>
          <ul className="list-disc px-4 mt-4 text-white">
            <li>Integrations to HRMS </li>
            <li>Finance & Accounting Automated Compliance</li>
            <li>Reporting Salary Personalization </li>
            <li>Employee Onboarding & Perquisites</li>
            <li>Tax Savings & CTC Calculator</li>
          </ul>
          <Button
            buttonStyle="bg-secondary text-white py-4 px-4 text-xlg rounded-sm mt-6"
            text="Connect with mool"
          />
        </div>
      </div>
      {/* company names */}
      <div className="flex align-center justify-center flex-col mt-20 mx-8">
        <div className="flex align-center justify-center bg-tataBg py-4 mt-6 rounded">
          <img src={tata} alt="" />
        </div>
        <div className="flex align-center justify-center bg-amazonBg py-4 mt-6 rounded">
          <img src={amazon} alt="" />
        </div>
        <div className="flex align-center justify-center bg-walmartBg py-4 mt-6 rounded">
          <img src={walmart} alt="" />
        </div>
        <div className="flex align-center justify-center bg-msBg py-4 mt-6 rounded">
          <img src={ms} alt="" />
        </div>
        <div className="flex align-center justify-center bg-giLeadBg py-4 mt-6 rounded">
          <img src={giLead} alt="" />
        </div>
      </div>
      {/* carousal */}
      <Carousel
        className="mt-24"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // customRightArrow={<CustomArrow />}
        // customLeftArrow={<CustomArrow />}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-20-px"
      >
        <div className="h-80 w-4/5 mx-auto px-6 py-8 border border-[#C7C9D0]">
          <img src={cardBg} alt="" className="absolute h-16 w-20 inset-x-16" />
          <p className="mt-8">
            A lot of our payroll related activity which we used to do manually
            on spreadsheets was automated by Mool Vetan. Their end-to-end
            automations saved us from so much headache in this last quarter.
          </p>
          <Button
            buttonStyle="text-primary py-4  text-xlg mt-6 font-bold"
            text="Read the case study 1"
          />
        </div>
        <div className="h-80 w-4/5 mx-auto px-6 py-8 border border-[#C7C9D0]">
          <img src={cardBg} alt="" className="absolute h-16 w-20 inset-x-16" />
          <p className="mt-8">
            A lot of our payroll related activity which we used to do manually
            on spreadsheets was automated by Mool Vetan. Their end-to-end
            automations saved us from so much headache in this last quarter.
          </p>
          <Button
            buttonStyle="text-primary py-4  text-xlg mt-6 font-bold"
            text="Read the case study 2"
          />
        </div>
        <div className="h-80 w-4/5 mx-auto px-6 py-8 border border-[#C7C9D0]">
          <img src={cardBg} alt="" className="absolute h-16 w-20 inset-x-16" />
          <p className="mt-8">
            A lot of our payroll related activity which we used to do manually
            on spreadsheets was automated by Mool Vetan. Their end-to-end
            automations saved us from so much headache in this last quarter.
          </p>
          <Button
            buttonStyle="text-primary py-4  text-xlg mt-6 font-bold"
            text="Read the case study 3"
          />
        </div>
        <div className="h-80 w-4/5 mx-auto px-6 py-8 border border-[#C7C9D0]">
          <img src={cardBg} alt="" className="absolute h-16 w-20 inset-x-16" />
          <p className="mt-8">
            A lot of our payroll related activity which we used to do manually
            on spreadsheets was automated by Mool Vetan. Their end-to-end
            automations saved us from so much headache in this last quarter.
          </p>
          <Button
            buttonStyle="text-primary py-4  text-xlg mt-6 font-bold"
            text="Read the case study 4"
          />
        </div>
      </Carousel>
      <div className="mt-16 py-20 bg-violet">
        <h2 className="text-[#989DB1] font-bold text-5xl px-8">
          Get the most out of mool
        </h2>
        <p className="font-semibold text-secondary text-lg px-8 mt-2 mb-12">
          Blogs curated for you
        </p>
        <Carousel
          className=""
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // customRightArrow={<CustomArrow />}
          // customLeftArrow={<CustomArrow />}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-20-px"
        >
          {carousalData.map((data) => {
            return (
              <div className="h-108 w-4/5 mx-auto border border-[#C7C9D0] bg-white rounded-xl">
                <img src={data.image} alt="" className="rounded-t-xl" />
                <div className="p-4">
                  <p className="text-secondary font-normal text-xs mb-1">
                    {data.date}
                  </p>
                  <h2 className="font-bold text-lg mb-2">{data.head}</h2>
                  <p className="font-light text-sm mb-4">{data.desc}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* mail section */}
      <div className="px-8 py-16 bg-[#0A0E1C]">
        <p className="text-white text-5xl font-bold">
          Subscribe to know the complete{" "}
          <span className="text-secondary">Mool story </span>!!
        </p>
        <input
          type="text"
          className="border border-[#F4F4F4] bg-[#0A0E1C] w-full px-4 py-2 mt-8 italics text-[#F4F4F4]"
          placeholder="Enter your email"
          onChange={(e) => {
            setMail(e.target.value);
            console.log(mail);
          }}
        />
        <Button
          buttonStyle="bg-secondary text-white py-4 px-4 text-xlg rounded-sm mt-6"
          text="Subscribe"
        />
      </div>
    </>
  );
};

export default Landing;
