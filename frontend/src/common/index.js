const backendDomin = "http://localhost:8080";

const SumaryApi = {
    signUP : {
        url: `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url: `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url: `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url: `${backendDomin}/api/userLogout`,
        method : "get"
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : "get"
    },
    updateUser:{
        url : `${backendDomin}/api/update-user`,
        method : "post"
    }
}

export default SumaryApi;