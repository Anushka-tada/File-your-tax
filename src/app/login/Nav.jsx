"use client";

import "./nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isKnowledgeDropdownOpen, setIsKnowledgeDropdownOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productsRef = useRef(null);
  const toolsRef = useRef(null);
  const knowledgeRef = useRef(null);
  const guidesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current && !productsRef.current.contains(event.target) &&
        toolsRef.current && !toolsRef.current.contains(event.target) &&
        knowledgeRef.current && !knowledgeRef.current.contains(event.target) &&
        guidesRef.current && !guidesRef.current.contains(event.target)
      ) {
        setIsProductsDropdownOpen(false);
        setIsToolsDropdownOpen(false);
        setIsKnowledgeDropdownOpen(false);
        setIsGuidesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Navbar-oute bg-white flex items-center justify-between lg:px-32 px-4 py-3 ">
      <div className="nav-logo">
        <a href="\homepage">
        <h2 className="font-bold text-3xl logo">File Your <span className="Blue">Tax</span></h2>
        </a>
      </div>

      <GiHamburgerMenu
        className="hamburger text-3xl cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <div className={`navbar-items ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row gap-6  lg:static absolute top-16 left-0 lg:top-auto lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0   mt-5 md:mt-5 lg:mt-0`}>
        <div className="product flex items-center gap-1" ref={productsRef}>
          <div
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
            className="cursor-pointer"
          >
            Products
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
          />
          {isProductsDropdownOpen && (
            <div className="dropdown drop-product bg-white shadow-lg rounded-lg absolute w-full lg:w-auto  text-base ">
              <ul>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">File Your Return</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Upload Form 16</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">CA Assisted Tax Filing</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Tax Planning Optimiser</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Refund Status</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">TDS Solution</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">NRI Taxes & ITR Filing</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Tax Advisory Services</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Capital Gain Tax Filing</li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Notices</li>
              </ul>
            </div>
          )}
        </div>

        <div className="tools flex items-center gap-1" ref={toolsRef}>
          <div
            onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
            className="cursor-pointer"
          >
            Tools
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
          />
          {isToolsDropdownOpen && (
            <div className="dropdown drop-tool bg-white shadow-lg rounded-lg absolute  w-full lg:w-auto">
                <div className="lists flex text-base ">
             <ul>
                  
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Calculator</li>
       
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">HRA Calculator</li>
                    
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Rent Receipt Generator</li>
                 
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">ITR Eligibility Checker</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Calculator on Section 234F</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">80C Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Cryptocurrency Tax Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Simple Interest Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">80DD Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Compound Interest Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Sukanya Samriddhi Yojana Calculator</li>
                    
                  </ul>
                  <ul>
                  <li>Form 12BB</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Gratuity Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">TDS Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Transport Allowance Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Leave Encashment Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">House Property Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">80D Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">80TTU Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">80U Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">OLd vs New Tax Slab Regime Calculator</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">IFSC code Search</li>

                  </ul>
                  </div>

                  <div className="more-tax-btn flex items-center gap-2">
                    <p>More Tax Tools</p>
                    <img src="https://tax2win.in/assets-new/img/new-theme/g_ghost_arrow.svg" alt="" width="20" height="20"></img>
                  </div>
            </div>
          )}
        </div>

        <div className="knowledge flex items-center gap-1" ref={knowledgeRef}>
          <div
            onClick={() => setIsKnowledgeDropdownOpen(!isKnowledgeDropdownOpen)}
            className="cursor-pointer"
          >
            Knowledge Center
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => setIsKnowledgeDropdownOpen(!isKnowledgeDropdownOpen)}
          />
          {isKnowledgeDropdownOpen && (
            <div className="dropdown bg-white shadow-lg rounded-lg absolute mt-48 lg:mt-48 text-base w-full lg:w-auto ">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">FAQ</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Tax Glossary</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Video Tutorials</li>
              </ul>
            </div>
          )}
        </div>

        <div className="guid flex items-center gap-1" ref={guidesRef}>
          <div
            onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
            className="cursor-pointer"
          >
            Guides
          </div>
          <RiArrowDropDownLine
            className="text-3xl"
            onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
          />
          {isGuidesDropdownOpen && (
            <div className="dropdown drop-guide bg-white shadow-lg rounded-lg absolute w-full lg:w-auto ">
               <div className="lists flex text-base gap-4">
             <ul>
                  
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700 font-extrabold">Income Tax Guides</li>
       
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Aadhar</li>
                    
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Capital Gains Income</li>
                 
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">E-filling of ITR</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">House Property </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Calander</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Notices</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Refund</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Slabs</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Income Tax Verification</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Pan Card</li>
                    <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Salary Income</li>
                    <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Section 80 Deductions</li>
                    <li  className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">TDS</li>
                    
                  </ul>
                  <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700 font-extrabold">Form 12BB</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST System</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST Registration</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">Input Tax Credit</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST Procedure</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST Returns</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST eWay Bills</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-green-700">GST Rates</li>
                   
                  </ul>
                  </div>

            </div>
          )}
        </div>

        <div>Pricing</div>
        <div>Contact</div>
       <a href="\login"> <div>Log In</div></a>
       <a href="\signup"> <div>Sign Up</div></a>
      </div>
    </div>
  );
};

export default Nav;

