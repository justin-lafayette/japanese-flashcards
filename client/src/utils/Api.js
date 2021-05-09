import axios from 'axios';

export default {
    sendScore: function(data) {
        console.log(data);
        return axios.post("/api/sendData", data)
            .catch( err=> console.log(err.response));
    },
};