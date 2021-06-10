import axios from 'axios';

export default {
    postScore: function(data) {
        console.log(data);
        return axios.post("/api/postData", data)
            .catch( err=> console.log(err.response));
    },
};