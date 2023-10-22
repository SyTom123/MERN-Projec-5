import {Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
    const isToken = undefined;
    return (
        <>
            {
             isToken ? (<Outlet/>): (<Navigate to= "/login"/>)
            }
        </>
       
    )
}
export default PrivateRoutes