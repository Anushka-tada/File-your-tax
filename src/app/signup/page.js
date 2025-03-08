

// import LogFooter from '../../LogIn/LogFooter';
// import Nav from '../../LogIn/Nav';

import LogFooter from '../login/LogFooter';
import Nav from '../login/Nav';


import Sign_Form from './Sign_Form';


// import styles from './HomePage.module.css';

const page = () => {
  return (
    <div>
      <Nav/>
<Sign_Form/>
<LogFooter/>
    </div>
  );
};

export default page;