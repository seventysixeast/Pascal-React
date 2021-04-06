import BaseService from './baseService';
import { IPeople } from '../contracts/IPeople';

class PeopleService extends BaseService {   
    async GetAllPeople(data : any)
    {       
        console.log("in get people grid data ", data);  
        return await this.API({
            url:'api/people/all',           
            method: "GET",
            params :{                
                "FirmId": data.FirmId,            
                "EmployeeId": data.EmployeeId,  
                }          
        }, true);
    }
}

export default PeopleService;