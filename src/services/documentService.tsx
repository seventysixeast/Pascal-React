import BaseService from './baseService';

class DocumentService extends BaseService {   
    async GetAllDocuments(data : any)
    {       
        console.log("in get people grid data ", data);  
        return await this.API({
            url:'api/document/all',           
            method: "GET",          
            params :{ 
                //"FirmId":data.FirmId,
                //"EmployeeId" : data.EmployeeId
                "searchkeyword": null,            
               "contactrecord": null, 
               "recordtype": null,
                "doctype": null,
                "ViewedOnStart" : null,
                "ViewedOnEnd" : null,
                "UploadedOnStart" : null,
                "UploadedOnEnd" : null,
                "projectid" : null,
                "requestid" : null,
                "companyid" : null,
                "peopleid" : null,
                "firstTimeLoad" : null,
                "orderby" : null,
                "orderdir" : true,                                          
                "pageNumber" : 1,
                "pagesize" : 25,
                "GridId" : 0,
                "FilterStatus" : null,    
                "FilterFlag" : 0                          
                },                
                arrayFormat: 'repeat'      
        }, true);
    }
}

//string searchkeyword = null, string contactrecord = null, string recordtype = null, string doctype = null, string ViewedOnStart = null, string ViewedOnEnd =null, string UploadedOnStart =null, string UploadedOnEnd =null, long? projectid =null, long? requestid =null, long? companyid = null, long? peopleid =null, bool firstTimeLoad = true, string orderby = "AddedOn", string orderdir = "desc", int pageNumber = 1, int? pagesize = 10, long? GridId = 0, string FilterStatus = "Public", int FilterFlag = 0
export default DocumentService;