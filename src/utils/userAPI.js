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
    },
    createPost: (post) => {
        return axios.post("/api/user/post", post);
    },
    getStatus: () => {
        return axios.get("/api/user/status");
    },
    getPosts: () => {
        return axios.get("/api/user/posts");
    },
    upload: (file) => {
        return axios.post("/api/user/upload", file );
    }
}