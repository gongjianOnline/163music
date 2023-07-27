import {post,get,FormDataPost} from "../utils/http"

function  login(){
   return post('/login',{name:'admin',pwd:"admin"})
}

export default {
  login
}