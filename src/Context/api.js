import axios from "axios";

const url = "https://ecommerce.main-gate.appx.uz/dev/adminka"

const userToken = localStorage.getItem("user")

const getCategory = async  () =>{
    try{
      const response =  axios.get(`${url}/category/list` ,{
        headers:{
            Barear:userToken
        }
      })
      console.log((await response).data);
    }
    catch(err){
        console.log(err);
    }
}

getCategory()