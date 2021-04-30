import BaseService from './baseService';

class PeopleService extends BaseService {   
    async GetAllPeople(data : any)
    {       
        console.log("in get people grid data ", data);  
        return await this.API({
            url:'api/people/all',           
            method: "GET",          
            params :{ 
                //"FirmId":data.FirmId,
                //"EmployeeId" : data.EmployeeId
                "ContactTypes": null,            
               "portalstatus": null, 
               "labels": null,
                "follow": null,
                "searchkeyword" : null,
                "start" : null,
                "end" : null,
                "company" : null,
                "city" : null,
                "state" : null,
                "zip" : null,
                "country" : null,
                "referredBy" : null,
                "companyid" : null,
                "firstTimeLoad" : true,
                "GridId" : 0,
                "FilterStatus" : "Public",
                "orderby" : "AddedOn",
                "orderdir" : "desc",
                "pageNumber" : 1,
                "pagesize" : 25,
                "FilterFlag" : 0 ,
                "reactFlag" : true             
                },                
                arrayFormat: 'repeat'      
        }, true);
    }

    async AddPeople(data : any)
    {       
        console.log("in get people grid data ", data);  
        return await this.API({
            url:'/api/people/AddPerson',           
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              data: data        
        }, true);
    }
}

export default PeopleService;