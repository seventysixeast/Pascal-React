import { IUser } from '../contracts/IUser';
//import constants from '../helpers/constants';
import BaseService from './baseService';

class AuthService extends BaseService {  

    async login(user: IUser) {   
        console.log("env = "+process.env.REACT_APP_API_URL); 
        var qs = require('qs');
        var data = qs.stringify({
            'grant_type': 'password',
            'username': user.username,
            'password': user.password
          });    

        return await this.API({
            url:'token',
            data: data,
            method: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        }, false);
    }    
}
export default AuthService;