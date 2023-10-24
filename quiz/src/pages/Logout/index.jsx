import {useNavigate} from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import {deleteAllCookie} from "../../helpers/cookie";
import {authen} from '../../components/actions/authen';

function Logout () {
    const dispatch = useDispatch();
    const navigate = useNavigate ()
    const handleLogout = () => {
        deleteAllCookie();
        dispatch(authen(false));
        navigate ("/login");
    }
    return  (
        <>
            <button className="button-danger" onClick={handleLogout}>
                Logout
            </button>
        </>
    )
}
export default Logout;