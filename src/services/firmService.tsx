import BaseService from './baseService';

class FirmService extends BaseService {

    GetDropdownDataForPerson(firmid : any)
    {
        console.log("in getting data for firm = "+firmid);      
        return this.API({
            url:'api/base/getdropdowns',           
            method: "GET" ,
            params :{                
                "FirmId": firmid
                }                   
        }, true);
    }
}
export default FirmService;