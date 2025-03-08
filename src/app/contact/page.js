


import LogFooter from '../login/LogFooter';
import Contact_footer from './Contact_footer';
import Contactform from './Contactform';
import Nav from './Nav';
import Solutions from './Solutions';

// import styles from './HomePage.module.css';

const page = () => {
  return (
    <div>
        <Nav/>
<Contactform/>
  <Solutions/>
  <Contact_footer/>
  <LogFooter/>
    </div>
  );
};

export default page;