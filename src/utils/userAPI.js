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
    postStatus: (status) => {
        return axios.post("/api/user/status", status);
    },
    getStatus: () => {
        return axios.get("/api/user/status");
    },
    getPosts: () => {
        return axios.get("/api/user/posts");
    },
    upload: (file) => {
        // console.log(Cookies);
        // const multer = require("multer");
        // console.log(__dirname + 'images/')
        // const upload = multer({ dest: __dirname+ '/images/' });
        return axios.post("/api/user/upload", file
        // , {
        // headers: {
        //     'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarydMIgtiA2YeB1Z0kl'
        //   }
        // }
        );
    }
}