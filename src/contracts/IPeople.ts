import { StringDecoder } from "node:string_decoder";

export interface IPeople{
    EmployeeId: number,
    FirmCompanyId: number,
    IPeopleFilter : IPeopleFilter,    
}

export interface IPeopleFilter {
    EmployeeId: number,
    FirmCompanyId: number,    
}
export interface IPerson{
    FirstName: string,
    LastName: string,
    EmailAddress : string,  
    PhoneNumber : number,
    ContactType: string,
    Title : string,
    ImageUrl : string,
    WebSite : string,
    FacebookUrl : string,
    TwitterUrl : string,
    KloutUrl : string,
    LinkedInUrl : string,
    GooglePlusUrl : string,
    GravatarUrl : string,
    Gravatarphoto : string,
    FacebookPhoto : string,
    TwitterPhoto : string,
    Googleplusphoto : string,
    Linkedinphoto : string,
    Kloutphoto : string,
    Description : string,
    City : string,
    Street : string,
    State : string,
    Zipcode : string,
    Country : string,
    SpouseFirstName : string,
    SpouseLastName : string,
    SpouseEmail : string,
    TaxId : string,
    SpouseDOB: string,
    SpouseTaxId: string,
    PortalStatus: string,
    CompanyId: number,
    FirmCompanyId: number,
    DOB: string,
    InviteCount : number
}