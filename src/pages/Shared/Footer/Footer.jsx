import moment from "moment";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-4">
    <div className="grid text-white grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#1F2937] p-6  flex flex-col md:justify-end  md:items-end ">
      <div className="text-center flex flex-col gap-1">
      <h1 className="text-xl font-medium ">CONTACT US</h1>
      <p> 123 ABS Street, Uni 21,  Bangladesh</p>
      <p> +88 123456789 </p>
      <p>Mon - Fri: 08:00 -
      22:00</p><p> Sat - Sun: 10:00 - 23:00</p>
      </div>
      </div>
      <div className="bg-[#111827] pl-8 p-6">
        <div className="text-center md:inline-block   space-y-5" >
        <h1 className="text-xl font-medium ">Follow US</h1>
        <p>Join us on social media</p>
        <div className="flex justify-center items-center gap-5 text-xl ">
        <FaFacebookF />
        <FaInstagram/>
        <FaTwitter/>
        </div>
        </div>
      </div>
    </div>
     <div className="bg-[#151515] text-white text-center p-4">Copyright ©
         {moment().format('  YYYY ')}   rimanroni All rights reserved.</div>
    </div>
  );
};

export default Footer;
