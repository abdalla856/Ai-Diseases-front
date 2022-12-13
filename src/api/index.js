import axios from 'axios'

export const getPredition =(formData)=>axios.post('http://127.0.0.1:8000/api/' ,formData ,{
    headers: {
        'Content-Type': 'multipart/form-data'
    }

})