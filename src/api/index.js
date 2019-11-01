import axios from 'axios';


let api = axios.create({
  headers: {
    'Client-ID' : 'uxezfv750kw6gr6c6u1kaaoz48vmfh'
  },
  params: {
    name: 'null',
  }
})

export default api;