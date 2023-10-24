/* eslint-disable no-unused-vars */
import { Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux'
import "./Layout.scss";
import Header from './Header';
import Footer from './Footer';
const Layout = () => {
  const authen = useSelector(state => state.authenReducer);
  return (
    <>
        <Header/>
        <div className="main">
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout