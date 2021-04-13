import React from 'react';
import Select from 'react-select';
import "../../../assets/css/firmstyle.css";
import { MdPeople, MdPeopleOutline } from 'react-icons/md';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const CreatePerson = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate1', label: 'Chocolate1' },
        { value: 'strawberry2', label: 'Strawberry2' },
        { value: 'vanilla3', label: 'Vanilla3' },
      ];

    return(
       
            <form className="person-form">                     
            <div className="col-sm-12">
       <div className="col-sm-6 padd-right-30">

           {/* person name */}
           <div className="row">
           <div className="col-sm-2">
            {/* <img alt="" className="logo-size"></img> */}
            <MdPeople className="project_circle"></MdPeople>
           </div>

           <div className="form-group col-sm-5">
                 <label>First Name</label>
                 <input type="input" className="form-control" placeholder="First Name"/>
           </div>
                  
           <div className="form-group col-sm-5">
                 <label>Last Name</label>
                 <input type="input" className="form-control" placeholder="Last Name"/>
           </div>
           </div>

            {/* spouse name */}
           <div className="row">
           <div className="form-group col-sm-6">
                 <label>Spouse First Name</label>
                 <input type="input" className="form-control" placeholder="Spouse First Name"/>
           </div>
                  
           <div className="form-group col-sm-6">
                 <label>Spouse Last Name</label>
                 <input type="input" className="form-control" placeholder="Spouse Last Name"/>
           </div>
           </div>

            {/* Contact type*/}
            <div className="row">
           <div className="form-group col-sm-12">
                 <label>Contact Type</label>
                 <select className="form-control" placeholder="Spouse First Name"/>
           </div>            
           </div>

            {/* labels*/}
            <div className="row">
           <div className="form-group col-sm-12">
                 <label>Labels</label>                 
                 <Select  
                    isMulti
                    options={options}
                    />
           </div>            
           </div>

             {/* Company*/}
             <div className="row">
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
                 <input type="input" className="form-control" placeholder="Work Website"/>
           </div>  
           <div className="form-group col-sm-12">
                 <label>Title</label>
                 <input type="input" className="form-control" placeholder="Title"/>
           </div>                 
           </div>

            {/* Email*/}
            <div className="row">
                <div className="form-group col-sm-6">
                        <label>Email Type</label>
                        <select className="form-control" placeholder="Email Type">
                        <option selected={true}>Email Type</option>
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
                 <input type="email" className="form-control" placeholder="Email"/>
           </div> 
            </div>

              {/* Phone*/}
              <div className="row">
                <div className="form-group col-sm-6">
                        <label>Phone Type</label>
                        <select className="form-control" placeholder="Email Type">                        
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
                 <input type="number" className="form-control" placeholder="Phone"/>
           </div> 
            </div>

            <div className="row">
            <div className="form-group col-sm-12">
                 <label>Street</label>
                 <input type="input" className="form-control" placeholder="street"/>
           </div> 

           <div className="form-group col-sm-12">
                 <label>City</label>
                 <input type="input" className="form-control" placeholder="city"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Country</label>
                 <input type="input" className="form-control" placeholder="country"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Zip/Postal Code</label>
                 <input type="input" className="form-control" placeholder="zip"/>
           </div>
            </div>
        </div>
 
        <div className="col-sm-6 padd-left-30 pull-right">
        <div className="row">
            <div className="form-group col-sm-12">
                 <label>TaxId Number</label>
                 <input type="input" className="form-control" placeholder="tax id"/>
           </div> 

           <div className="form-group col-sm-12">
                 <label>Date of Birth</label>
                 <input type="date" className="form-control" placeholder="DOB"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Spouse Tax Id</label>
                 <input type="input" className="form-control" placeholder="spouse tax id"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Spouse Date of Birth</label>
                 <input type="input" className="form-control" placeholder="spouse DOB"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Facebook</label>
                 <input type="input" className="form-control" placeholder="facebook"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>LinkedIn</label>
                 <input type="input" className="form-control" placeholder="linkedin"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Twitter</label>
                 <input type="input" className="form-control" placeholder="twitter"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Google Plus</label>
                 <input type="input" className="form-control" placeholder="google plus"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Klout</label>
                 <input type="input" className="form-control" placeholder="klout"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>RefferedBy</label>
                 <input type="input" className="form-control" placeholder="refferedby"/>
           </div>

           <div className="form-group col-sm-12">
                 <label>Description</label>
                 <input type="input" className="form-control" placeholder="description"/>
           </div>
            </div>
        </div>
 </div>         
 </form>
       
    )
};

export default CreatePerson;