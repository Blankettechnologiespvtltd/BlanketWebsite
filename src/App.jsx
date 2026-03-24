import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Components/RootLayout';
import About from "./Pages/AboutUs"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Careers from "./Pages/Careers"
import Contact from "./Pages/Contact"
import Testimonials from "./Components/Testimonials"

import AnimatedHero from './AnimatedHero';
import WebDevelopment from './Pages/WebDevelopment';
import UIUXDesign from './Pages/UIUXDesign';
import AppDevelopment from './Pages/AppDevelopment';
import DigitalMarketing from './Pages/DigitalMarketing';
import WebTesting from './Pages/WebTesting';
import PaymentGateway from './Pages/PaymentGateway';
import EcommerceSolutions from './Pages/EcommerceSolutions';
import CRMSolutions from './Pages/CRMSolutions';
import ERPSoftware from './Pages/ERPSoftware';
import PortfolioBuilder from './Pages/PortfolioBuilder';
import Consultancy from './Pages/Consultancy';
import CaseStudies from './Pages/CaseStudies';
import Blog from "./Pages/Blog "
import From from './Components/ContactForm';
import ConsultancySection from './Components/ConsultancySection';
import ResumeUpload from './Components/ResumeUpload';
import RPO from './Pages/RPO';
import PayrollPage from './Pages/PayrollPage';
import GlobalSearch from './Pages/GlobalSearch';
import ExecutiveSearch from './Pages/ExecutiveSearch';
import ContractStaffing from './Pages/ContractStaffing';
import PermanentHiring from './Pages/PermanentHiring';
import ProjectBasedHiring from './Pages/ProjectBasedHiring';
import PrivacyPolicyPage from './Components/privacypolicy';
import TermsConditionsPage from './Components/TermsConditionsPage';
import SapImplementation from "./Pages/SapImplementation";
import Footer from './Components/Footer';




const App = () => {
  const router = createBrowserRouter([
 {
    path: "/",
    element: <div>  <RootLayout /></div>,
    children: [
    {
    path: "/",
    element: <div><Navbar /><Home /></div>,
  },
  {
    path: "/about",
    element: <div> <Navbar /><About /></div>,
  },
  {
    path: "/services",
    element: <div><Services /></div>,
  },
  {
    path: "/careers",
    element: <div><Careers /></div>,
  },
  {
    path: "/contact",
    element: <div><Contact /></div>,
  },
  {
    path: "/consultancy",
    element: <div><Consultancy/></div>,
  },
  // {
  //   path: "/case-studies",
  //   element: <div><CaseStudies /></div>,
  // },
  {
    path: "/blog",
    element: <div><Blog /></div>,
  },
  {
    path: "/from",
    element: <div><From /></div>,
  },
  // sub menu routes 
  {
    path: "/web-designing",
    element: <div><WebDevelopment /></div>,
  },
  {
    path: "/ui-ux-designing",
    element: <div><UIUXDesign /></div>,
  },
  {
    path: "/app-development",
    element: <div><AppDevelopment/></div>,
  },
  {
    path: "/digital-marketing",
    element: <div><DigitalMarketing/></div>,
  },
  {
    path: "/web-testing",
    element: <div><WebTesting/></div>,
  },
  {
    path: "/payment-gateway",
    element: <div><PaymentGateway/></div>,
  },
  {
    path: "/ecommerce",
    element: <div><EcommerceSolutions /></div>,
  },
  {
    path: "/crm",
    element: <div><CRMSolutions/></div>,
  },
  {
    path: "/erp",
    element: <div><ERPSoftware/></div>,
  },
  {
    path: "/portfolio",
    element: <div><PortfolioBuilder/></div>,
  },
  {
    path: "/ConsultancySection",
    element: <div>< ConsultancySection/></div>,
  },
  {
    path: "/Resume",
    element: <div>< ResumeUpload/></div>,
  },
  // {
  //   path: "/RPO",
  //   element: <div><RPO /></div>,
  // },
  // {
  //   path: "/Payroll",
  //   element: <div><PayrollPage /></div>,
  // },
  // {
  //   path: "/GlobalSearch",
  //   element: <div><GlobalSearch /></div>,
  // },
  // {
  //   path: "/ExecutiveSearch",
  //   element: <div><ExecutiveSearch /></div>,
  // },
  // {
  //   path: "/ContractStaffing",
  //   element: <div><ContractStaffing /></div>,
  // },
  //  {
  //   path: "/PermanentHiring",
  //   element: <div><PermanentHiring /></div>,
  // },
  //  {
  //   path: "/ProjectBasedHiring",
  //   element: <div><ProjectBasedHiring /></div>,
  // },
  {
    path: "/privacypolicy",
    element: <div><PrivacyPolicyPage /></div>,
  },
  {
    path: "/TermsConditionsPage",
    element: <div><TermsConditionsPage /></div>,
  },
  
  {
    path: "/Sap",
    element: <div><SapImplementation /> <Footer /> </div>,
  },
   {
    path: "/testimonial",
    element: <div><Testimonials /> <Footer /> </div>,
  },
  
  
    ],
  },
]);


  


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
