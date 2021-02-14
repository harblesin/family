import axios from "axios";

export default  {
    loginUser: (userInfo) => {
        console.log("yea")
        return axios.post("/api/user/login", userInfo);
    },

    authCheck: () => {
        return axios.get("/api/user/auth")
        .catch(err => err);
    },
    signUp: (userInfo) => {
        return axios.post("/api/user/signup", userInfo);
    }
}