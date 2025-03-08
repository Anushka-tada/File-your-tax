import Navbar from '../components/Navbar/Navbar';
import Componen6 from './Feedback';
import EasiestWay from './EasiestWay';
import Steps from './Steps';
import Best_Website from './Best_Website';
import Check_status from './Check_status';
import Services from './Services';
import Component7 from './Component7';
import Component8 from './Component8';
import Component9 from './Component9';
import Faq_ITR from './Faq_ITR';
import Need_Support from './Need_Support';
import Footer from './Footer';
import Feedback from './Feedback';

// import styles from './HomePage.module.css';

const page = () => {
  return (
    <div>
        <Navbar/>
      <EasiestWay />
      <Steps />
      <Best_Website />
      <Check_status />
      <Services />
  <Feedback/>
  <Component7/>
  <Component8/>
  <Component9/>
  <Faq_ITR/>
  <Need_Support/>
  <Footer/>
    </div>
  );
};

export default page;