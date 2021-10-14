import axios from "axios";

const signUp = async (username, email, hashed) => {
    const res = await axios.post("http://localhost:8000/api/post/register/create/user/", {
        "username": `${username}`,
        "email": `${email}`,
        "platform": `password`,
        "password": `${hashed}`
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(err => { return err.response; });
    return res.data;
};

const signIn = async (email, hashed) => {
    const res = await axios.post("http://localhost:8000/api/post/login/", {
        "email": `${email}`,
        "password": `${hashed}`
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(err => { return err.response; });
    return res.data
};

const verify = async () => {
    const res = await axios.get("http://localhost:8000/api/get/verify/jwt/token/", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("Authorization")}`
        }
    }).catch(err => { return err.response; });
    return res.data;
};

const del = async (hashed) => {
    const res = await axios.post("http://localhost:8000/api/post/delete/user/", {
        "password" : `${hashed}`
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("Authorization")}`
        }
    }).catch(err => { return err.response; });
    return res.data
};

export { del, signIn, signUp, verify };