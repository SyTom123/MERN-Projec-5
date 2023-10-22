import {Link, Outlet} from 'react-router-dom'
import "./Layout.scss";
const Layout = () => {
  return (
    <div>
        <header className="header">
            <div className="header__logo">
                <Link to ="/">Logo</Link>
            </div>
        </header>
        <div className="main">
            <Outlet/>
        </div>
        <footer className="footer">
            Coppy right by Nguyen Tien Sy
        </footer>
    </div>
  )
}

export default Layout