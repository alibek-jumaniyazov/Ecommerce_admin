import axios from "axios";

const url = "https://ecommerce.main-gate.appx.uz/dev/adminka"

const userToken = localStorage.getItem("user")
console.log(userToken);

export const getCategory = async  () =>{
    try{
      const response =  axios.get(`${url}/category/list` ,{
        headers:{
            Barear:userToken
        }
      })
      console.log(response);
    }
    catch(err){
        console.log(err);
    }
}

