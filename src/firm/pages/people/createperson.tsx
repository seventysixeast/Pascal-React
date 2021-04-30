import React,{ useEffect, useState } from 'react';
import Select from 'react-select';
import "../../../assets/css/firmstyle.css";
import { MdPeople, MdPeopleOutline } from 'react-icons/md';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { IPerson } from "../../../contracts/IPeople";
import { DropDownList } from '@progress/kendo-react-dropdowns';
//import MultiSelect from "@khanacademy/react-multi-select";
import MultiSelect from "react-multi-select-component";
import { Button } from 'react-bootstrap';
import PeopleService from '../../../services/peopleService';


const CreatePerson = (data: any) => {
    const [personDetail, setPersonDetail] = useState({} as IPerson);    
    const [contacttypeDropdownList, setContacttypeDropdownList] : any = useState();
    const [selectedLabel, setSelectedLabel] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [labelids, setlabelids] : any = useState();
    const [companyids, setCompanyids] : any = useState();
    
      console.log("data in create is ",data);
     // let contacttypelist : any = [];
      let labellist : any = [];
      let companieslist : any = [];
      let companiesoptions : any = [];
      let contacttypeoptions : any = [];

      if(data != null && data != "undefined")
      {         
        contacttypeoptions = data.data.contacttypeList.length > 0
           && data.data.contacttypeList.map((item : any, i : any) => {
            return (
            <option key={i} value={item.ContactTypeId}>{item.ContactType1}</option>
            )}, this);

           if(data.data.labelList != null && data.data.labelList != undefined)
           {
            data.data.labelList.forEach((item : any) => {
                labellist.push({value: item.LabelId, label : item.LabelName});
              });           
            console.log("labels are , ",labellist);
           }
         companiesoptions = data.data.companiesList.length > 0
            && data.data.companiesList.map((item : any, i : any) => {
          return (
            <option key={i} value={item.CompanyId}>{item.CompanyName}</option>
            )}, this);            
        }
        
      const handleInputChange = (name : any, value : any) => {
            if(name === "firstname")
            personDetail.FirstName = value;
            if(name === "lastname")
            personDetail.LastName = value;
            if(name === "spousefirstname")
            personDetail.SpouseFirstName = value;
            if(name === "spouselastname")
            personDetail.SpouseLastName = value;        
            if(name === "website")
            personDetail.WebSite = value;
            if(name === "title")
            personDetail.Title = value;
            //if(name === "Email")
           // personDetail.Email = value;
            if(name === "phone")
            personDetail.PhoneNumber = value;
            if(name === "street")
            personDetail.Street = value;
            if(name === "city")
            personDetail.City = value;
            if(name === "state")
            personDetail.State = value;
            if(name === "country")
            personDetail.Country = value;
            if(name === "zipcode")
            personDetail.Zipcode = value;           
            if(name === "taxid")
            personDetail.TaxId = value;
            if(name === "dob")
            personDetail.DOB = value;
            if(name === "spousetaxid")
            personDetail.SpouseTaxId = value;
            if(name === "spousedob")
            personDetail.SpouseDOB = value;
            if(name === "facebook")
            personDetail.FacebookUrl = value;
            if(name === "linkedin")
            personDetail.LinkedInUrl = value;
            if(name === "twitter")
            personDetail.TwitterUrl = value;
            if(name === "googleplus")
            personDetail.GooglePlusUrl = value;
            if(name === "klout")
            personDetail.KloutUrl = value;
            if(name ==="description")
            personDetail.Description = value;              
      } 
        const handleCompanySelect=(e : any)=>{
            personDetail.CompanyId = e.target.value;           
        }
        const handleContacttypeSelect=(e : any)=>{
            personDetail.ContactTypeId = e.target.value;           
        }
     
      const [isLoading, setLoading] = useState(false);
      const handleCreatePerson =async()=>
      {
        if(selectedLabel != null && selectedLabel.length > 0)
        {
            console.log("selected companies are = ",selectedLabel); 
            var ids : string = "";
            selectedLabel.map((lbl : any) => {
                ids += lbl.LabelId +",";                
            });  
            setlabelids(ids);   
            console.log("lablel ids are = ",labelids);
        }

        if(selectedCompany != null && selectedCompany.length > 0)
        {
            console.log("selected companies are = ",selectedCompany); 
            var ids : string  = "";
            selectedCompany.map((comp : any) => {
                ids += comp.CompanyId +",";                
            });  
            setCompanyids(ids);   
            console.log("company ids are = ",companyids);
        }
        personDetail.Labels = labelids;        
        personDetail.FirmCompanyId = data.data.firmcompanyId;
        let service = new PeopleService();  
        await service.AddPeople(personDetail).then((responsedata : any) => { 
            console.log("add people Response", responsedata); 
            alert(responsedata);
        });
      }

    return(
        <form className="person-form">                     
            <div className="row col-sm-12 create-person-container">
                <div className="col-sm-6 padd-right-30">
                    {/* person name */}
                    <div className="row mb-3">
                        <div className="col-sm-2">
                            {/* <img alt="" className="logo-size"></img> */}
                            <MdPeople className="project_circle"></MdPeople>
                        </div>
                        <div className="form-group col-sm-5">
                            <label>First Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("firstname", e.target.value)}/>
                        </div> 
                        <div className="form-group col-sm-5">
                            <label>Last Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("lastname", e.target.value)}/>
                        </div>
                    </div>

                    {/* spouse name */}
                    <div className="row mb-3">
                        <div className="form-group col-sm-6">
                            <label>Spouse First Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("spousefirstname", e.target.value)}/>
                        </div>      
                        <div className="form-group col-sm-6">
                            <label>Spouse Last Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("spouselastname", e.target.value)}/>
                        </div>
                    </div>

                    {/* Contact type*/}
                    <div className="row mb-3">
                       <div className="form-group col-sm-12">
                           <label>Contact Type</label>                 
                           <select onChange={handleContacttypeSelect}>{contacttypeoptions}</select>
                       </div>            
                    </div>

                    {/* labels*/}
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                            <label>Labels</label> 
                        <MultiSelect
                                options={labellist}
                                value ={selectedLabel}
                                onChange={setSelectedLabel}
                                labelledBy="Select"
                            />                           
                        </div>            
                    </div>

                    {/* Company*/}
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                           <label>Company</label>        
                            <select onChange={handleCompanySelect}>{companiesoptions}</select>                       
                        </div>  
                        <div className="form-group col-sm-12">
                            <label>Work WebSite</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("website", e.target.value)}/>
                        </div>  
                        <div className="form-group col-sm-12">
                            <label>Title</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("title", e.target.value)}/>
                        </div>                 
                    </div>

                    {/* Email*/}
                    <div className="row mb-3">
                        <div className="form-group col-sm-6">
                            <label>Email Type</label>
                            <select className="form-control" defaultValue={0}>
                                <option>Email Type</option>
                                <option>Personal Email</option>
                                <option>Work Email</option>
                                <option>Spouse Email</option>
                                <option>Spouse Work</option>
                                <option>Other Email 1</option>
                                <option>Other Email 2</option>
                            </select>
                        </div>  
                        <div className="form-group col-sm-12">
                             <label>Email</label>
                             <input type="email" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                        </div> 
                    </div>

                    {/* Phone*/}
                    <div className="row mb-3">
                        <div className="form-group col-sm-6">
                            <label>Phone Type</label>
                            <select className="form-control phone-type">                        
                                <option selected={true}>Phone Type</option>
                                <option>Cell Phone</option>
                                <option>Work Phone</option>
                                <option>Home Phone</option>
                                <option>Spouse Cell</option>
                                <option>Spouse Work</option>
                                <option>Other Phone</option>
                            </select>
                        </div>  
                        <div className="form-group col-sm-12">
                            <label>Phone</label>
                            <input type="number" className="form-control" onChange={(e)=> handleInputChange("phone", e.target.value)}/>
                        </div> 
                    </div>
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                             <label>Street</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("street", e.target.value)}/>
                       </div> 
                       <div className="form-group col-sm-12">
                             <label>City</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("city", e.target.value)}/>
                       </div>
                       <div className="form-group col-sm-12">
                             <label>Country</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("country", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12">
                             <label>Zip/Postal Code</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("zipcode", e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 padd-left-30 pull-right">
                    <div className="row">
                        <div className="form-group col-sm-12 mb-3">
                             <label>TaxId Number</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("taxid", e.target.value)}/>
                        </div> 
                        <div className="form-group col-sm-12 mb-3">
                             <label>Date of Birth</label>
                             <input type="date" className="form-control" onChange={(e)=> handleInputChange("dob", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Spouse Tax Id</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("spousetaxid", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Spouse Date of Birth</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("spousedob", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Facebook</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("facebook", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>LinkedIn</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("linkedin", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Twitter</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("twitter", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Google Plus</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("googleplus", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Klout</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("klout", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>RefferedBy</label>
                             <input type="input" className="form-control" onChange={(e)=> handleInputChange("refferedby", e.target.value)}/>
                        </div>
                        <div className="form-group col-sm-12 mb-3">
                             <label>Description</label>
                             <textarea className="form-control" rows={3} onChange={(e)=> handleInputChange("description", e.target.value)}/>
                        </div>
                        <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick = {handleCreatePerson}
                            >
                            {isLoading ? 'Loading…' : 'Add Person'}
                        </Button>                      
                    </div>
                </div>
            </div>         
        </form>
    )
};

export default CreatePerson;