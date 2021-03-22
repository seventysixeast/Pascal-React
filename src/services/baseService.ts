import axios from 'axios';
import { toast } from 'react-toastify';
//import constants from '../helpers/constants';
class BaseService {
    API = async function (options: any, authRequired = true, onUploadPrgress: any = undefined, onDownloadPrgress: any = undefined) {
        console.log("options = ",options)
        let token: any = localStorage.getItem("token");
      //  console.log("token from storage", token);   
      var client : any = null;      
        let authHeader: string = "";        
        if (authRequired && token) {
            authHeader = token; /// Add header
            console.log("token from local storage = "+authHeader);
            client = axios.create({
                baseURL:process.env.REACT_APP_API_URL,
                headers: {'authorization': authHeader}           
                //onUploadProgress: onUploadPrgress,
               // onDownloadProgress: onDownloadPrgress            
            });
        }
        else
        {
            client = axios.create({
                baseURL:process.env.REACT_APP_API_URL,
                //headers: {'authorization': authHeader}           
                //onUploadProgress: onUploadPrgress,
               // onDownloadProgress: onDownloadPrgress            
            });
        }         

        const onSuccess = function (response: any) {
            // console.log('Request Successful!', response);
            return response.data;
        }

        const onError = function (error: any) {
            console.log('Request Failed:', error.config);
            if (error.response) {
                toast(error.response.data.error_description, { type: "error" });
                // Request was made but server responded with something
                // other than 2xx
                if (error.response.status === 401) {
                    //  localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    //   history.push("/");
                    window.location.reload();
                }
                console.log('Status:', error.response.status);
                console.log('Data:', error.response.data);
                console.log('Headers:', error.response.headers);
            } else {
                // Something else happened while setting up the request
                // triggered the error
                console.log('Error :', error);
            }
            return Promise.reject(error.response || error.message);
        }
        return client(options)
            .then(onSuccess)
            .catch(onError);
    }
    async uploadFile(data: any, onUploadPrgress: any) {
        return await this.API({ url: "/upload", data, method: "post" }, true, onUploadPrgress);
    }
    async downloadFile(data: any, onDownloadPrgress: any) {
        return await this.API({ url: "/upload", data, method: "post" }, true, undefined, onDownloadPrgress);
    }
}
export default BaseService;