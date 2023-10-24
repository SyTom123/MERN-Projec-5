import { Link, NavLink } from "react-router-dom"
import {getCookie} from '../../helpers/cookie'
import Logout from "../../pages/Logout";
const Header = () => {
    const token = getCookie("token");
  return (
    <div>
        <header className="header">
            <div className="header__logo">
                <Link to ="/">Logo</Link>
            </div>
            {
                token && (
                    <div className="header__menu">
                        <NavLink to = '/'>
                            Home
                        </NavLink>
                        <NavLink to = '/topic'>
                            Topic
                        </NavLink>
                        <NavLink to = '/answer'>
                            Answer
                        </NavLink>
                    </div>
                )
            }
            <div className="header__account">
                { token ?  
                    <>
                        <Logout/>
                    </> : 
                    <>
                     <NavLink to = '/login'>
                        Login
                    </NavLink>
                    <NavLink to = '/Register'>
                        Register
                    </NavLink>
                    </>
                }
               
               
            </div>
        </header>
    </div>
  )
}

export default Header