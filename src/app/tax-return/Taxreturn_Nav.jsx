"use client";

import "./nav.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";

const Taxreturn_Nav = () => {
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

      <div className={`navbar-items ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row gap-6  lg:static absolute top-16 left-0 lg:top-auto lg:left-auto
       bg-white lg:bg-transparent w-full lg:w-auto py-7 lg:py-0 lg:px-6 md:px-1 px-1 lg:px-0 mt-5 md:mt-5 lg:mt-0`}>
        
        {/* <div className="font-medium">Log In</div> */}
        <Link href="\login"
               className="font-medium" > Log In
                   </Link>
                   <Link href="\signup"
               className="font-medium" > Sign Up
                   </Link>
      </div>
    </div>
  );
};

export default Taxreturn_Nav;

