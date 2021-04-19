import React,{ useEffect, useState } from 'react';
import Select from 'react-select';
import "../../../assets/css/firmstyle.css";
import { MdPeople, MdPeopleOutline } from 'react-icons/md';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { IPerson } from "../../../contracts/IPeople";
import { DropDownList } from '@progress/kendo-react-dropdowns';

const CreatePerson = (data: any) => {
    const [personDetail, setPersonDetail] = useState({} as IPerson);
    //  const [labelDropdownList, setLabelDropdownList] : any = useState();
    const [contacttypeDropdownList, setContacttypeLabelDropdownList] : any = useState();
    // const [companiesDropdownList, setCompaniesDropdownList] : any = useState(); 
      console.log("data in create is ",data);
      let contacttypelist : any = [];
      if(data != null && data != "undefined")
      {
           if(data.contacttypeList != null)
           {
            contacttypelist = data.contacttypeList;
            setContacttypeLabelDropdownList(data.contacttypeList);
           }
           console.log("contact type is , ",contacttypeDropdownList);
      }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate1', label: 'Chocolate1' },
        { value: 'strawberry2', label: 'Strawberry2' },
        { value: 'vanilla3', label: 'Vanilla3' },
      ];

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
            if(name === "Email")
            personDetail.EmailAddress = value;
            if(name === "phone")
            personDetail.PhoneNumber = value;
            if(name === "street")
            personDetail.Street = value;
            if(name === "city")
            personDetail.City = value;
            if(name === "country")
            personDetail.Country = value;
            if(name === "zipcode")
            personDetail.Zipcode = value;
            if(name === "city")
            personDetail.City = value;
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
            // if(name === "klout")
            // personDetail.KloutUrl = value;
            // if(name === "klout")
            // personDetail.KloutUrl = value;
            console.log("perosn detail : ",personDetail);
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
                           <Select options={contacttypelist} />
                       </div>            
                    </div>

                    {/* labels*/}
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                            <label>Labels</label>                 
                             <Select  
                                isMulti
                                options={options}
                                />
                        </div>            
                    </div>

                    {/* Company*/}
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                            <label>Company</label>                 
                            <Typeahead
                                id="basic-typeahead-multiple"
                                labelKey="label"         
                                options={options}          
                                multiple
                                defaultSelected={options.slice(0, 1)}       
                                />
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
                    </div>
                </div>
            </div>         
        </form>
    )
};

export default CreatePerson;