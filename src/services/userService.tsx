import BaseService from './baseService';

class UserService extends BaseService {   
    GetUser()
    {
        console.log("in get user");      
        return this.API({
            url:'api/User/UserInfo',           
            method: "GET"                   
        }, true);
    }
}
export default UserService;