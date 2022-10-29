import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logOutSuccess,registerStart, registerSuccess, registerFailed } from "./authSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";


export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    }catch(err){
        dispatch(loginFailed());
    }
};

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart());
    try {
        const res = axiosJWT.get("http://localhost:8000/user",{
            headers: {token: `Bearer ${accessToken}`},
        });
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUsersFailed());
    }
};

export const logOut = async(dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(loginStart());
    try {
        await axiosJWT.post("http://localhost:8000/auth/login",id,{
            headers: {token: `Bearer ${accessToken}`},
        });
        dispatch(logOutSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch,navigate) =>{
    dispatch(registerStart());
    console.log(user)
    try{
        await axios.post("http://localhost:8000/auth/register",user);
        dispatch(registerSuccess());
        navigate("/login")
    }catch(err){
        dispatch(registerFailed());
    }
}