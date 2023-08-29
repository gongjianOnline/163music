import {post,get,FormDataPost} from "../utils/http"

// function  login(){
//    return post('/login',{name:'admin',pwd:"admin"})
// }

const getBanner = ()=>{
  return get("/banner",{type:0})
}

export default {
  // login,
  getBanner
}