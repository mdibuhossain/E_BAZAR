import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AuthRoute = ({ children }) => {
    const { user } = useAuth();
    // console.log(user)
    if (!user?.uid) return <Redirect push to="/signin" />
    return children;
};

export default AuthRoute;