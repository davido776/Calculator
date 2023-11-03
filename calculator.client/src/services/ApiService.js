
const baseUrl = "https://localhost:44334/api/v1/operations"


const headers = {
    'Content-type': 'application/json; charset=UTF-8',
 }

 export const getData = async (url) => {
    const response = await fetch(`${baseUrl}/${url}`, {
     method: 'GET',
     headers: headers
     })
    const res = await response.json();
    return res;
 }

 export const postData = async (url, body) => {
   await fetch(`${baseUrl}/${url}`, {
   method: 'POST',
   body: JSON.stringify({
      body
   }),
   headers: headers
   })
   .then((response) => response.json())
   .catch((err) => {
      console.log(err.message);
   }); 
 }

 export const deleteData = async (url) => {
    await fetch(`${baseUrl}/${url}`, {
      method: 'DELETE',
      headers: headers
    })
 }



