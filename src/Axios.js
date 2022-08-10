import React from 'react';
import axios from 'axios';

const Axios = () => {
    const click = (e) => {
        console.log(e.target.value);
        axios.get('http://localhost:8080/api/axios/test')
            .then((resp)=>{
            console.log(resp);
            console.log(resp.data);
            console.log(resp.data.data);
        })
    };

    return (
        <div>
            <button onClick={click} value="1">버튼버튼</button>
        </div>
    );
};

export default Axios;