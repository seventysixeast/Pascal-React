import React, { useState, useEffect, useRef }  from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PeopleGrid from "./peoplegrid";
import "../../../assets/css/firmstyle.css";
import CreatePerson from "./createperson";
import FirmService from '../../../services/firmService';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import { MdPeople, MdPeopleOutline } from 'react-icons/md';
import { Typeahead } from 'react-bootstrap-typeahead';
import MultiSelect from "react-multi-select-component";
import { IPerson } from "../../../contracts/IPeople";
import PeopleService from '../../../services/peopleService';
import { Star, MoreVert } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const PersonDetails = (data: any) => {
const [personDetail, setPersonDetail] = useState({} as IPerson);    
    const [contacttypeDropdownList, setContacttypeDropdownList] : any = useState();
    const [selectedLabel, setSelectedLabel] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [labelids, setlabelids] : any = useState();
    const [companyids, setCompanyids] : any = useState();
		const [companies, setCompanies] : any = useState([{id:1, CompanyId:"",website:"",title:""}]);
		const [showAddCompany, setShowAddCompany] : any = useState(false);
		const [email, setEmail] : any = useState([{id:1, emailType:"",email:""}]);
		const [showAddEmail, setShowAddEmail] : any = useState(false);
		const [phone, setPhone] : any = useState([{id:1, phoneType:"",phone:""}]);
		const [showAddPhone, setShowAddPhone] : any = useState(false);
		
    
      console.log("data in create is ",data);
     // let contacttypelist : any = [];
      let labellist : any = [];
      let companieslist : any = [];
      let companiesoptions : any = [];
      let contacttypeoptions : any = [];
			let pevents = 'none';
			let pageStyle = {
				addCompanyBtn : {
					border: "none",backgroundColor: "#fff",color: "#313534", opacity:"0.4"
				}
			}
			console.log('data----',data);
      if(data != null && data != "undefined" && data.data)
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
					 if(data.data.companiesList.length > 0)
					 {
						data.data.companiesList.forEach((item : any) => {
							let obj = Object.create({label : item.CompanyName, id : item.CompanyId});
							obj.label = item.CompanyName;
							obj.id = item.CompanyId;
							companiesoptions.push(obj)
						});
					}
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
        const handleEmailSelect=(name : any, val : any, i : any)=>{
					console.log('VALUE--',val); 
					let eml = [ ...email ];
					if(name=="emailType"){
						eml[i].emailType = val;
					}
					if(name=="email"){
						var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
						if (pattern.test(val)) {
							eml[i].email = val;
							if(i==eml.length-1){
									setShowAddEmail(true);
							}
						}else{
							setShowAddEmail(false);
						}
					}
					setEmail(eml);
        }
				 const handlePhoneSelect=(name : any, val : any, i : any)=>{
					console.log('VALUE--',val); 
					let phn = [ ...phone ];
					if(name=="phoneType"){
						phn[i].phoneType = val;
					}
					if(name=="phone"){
						if(isNaN(val)){
							setShowAddPhone(false);
						}else{
							phn[i].phone = val;
							if(i==phn.length-1){
									setShowAddPhone(true);
							} 
						}
							
					}
					setPhone(phn);
        }
				
				        const handleCompanySelect=(name : any, val : any, i : any)=>{
					console.log(val); 
					let cmp = [ ...companies ];
					if(name=="companyId"){
						setShowAddCompany(false);
						if(val.length>0){
							let company_id = val.map((item: any) => {
								return item.id;
							})
							if(company_id.length > 0 && company_id[0]){
								if(i==cmp.length-1){
									setShowAddCompany(true);
								}
								cmp[i].CompanyId = company_id[0];
								//personDetail.CompanyId = company_id[0];
							}
						}
					}
					if(name=="website"){
						cmp[i].website = val;
					}
					if(name=="title"){
						cmp[i].title = val;
					}
					setCompanies(cmp);
        }
				const addPhone=()=>{
					if(!showAddPhone){
						return false;
					}
					let phn = [ ...phone ];
					let lastElement = phn[phn.length-1];
					console.log('last element---',lastElement);
					let last_id = lastElement.id + 1;
					let newElement = {id:1, phoneType:"",phone:""};
					newElement.id = last_id;
					phn.push(newElement)
					console.log('phnn---',phn);
					setPhone(phn);
					setShowAddPhone(false);
					console.log('phn---',phone);
				}
				const removePhone=(key : any)=>{
					let phn = [ ...phone ];
					phn.splice(key, 1);
					console.log(phn);
					setPhone(phn);
				}
				const renderRemovePhoneBtn=(key : any)=>{
					return (
						<i className="mdi mdi-delete float-right" onClick={() => removePhone(key)}></i>
					)
				}
				const addEmail=()=>{
					if(!showAddEmail){
						return false;
					}
					let eml = [ ...email ];
					let lastElement = eml[eml.length-1];
					console.log('last element---',lastElement);
					
					let last_id = lastElement.id + 1;
					let newElement = {id:1, emailType:"",email:""};
					newElement.id = last_id;
					eml.push(newElement)
					console.log('rml---',eml);
					setEmail(eml);
					setShowAddEmail(false);
					console.log('eml---',email);
				}
				const removeEmail=(key : any)=>{
					let phn = [ ...phone ];
					phn.splice(key, 1);
					console.log(phn);
					setPhone(phn);
				}
				const renderRemoveEmailBtn=(key : any)=>{
					return (
						<i className="mdi mdi-delete float-right" onClick={() => removeEmail(key)}></i>
					)
				}
				
				const addCompany=()=>{
					if(!showAddCompany){
						return false;
					}
					let cmp = [ ...companies ];
					let lastElement = cmp[cmp.length-1];
					let newElement = {id: 1, CompanyId: "", website: "", title: ""}
					newElement.id = lastElement.id+1;
					cmp.push(newElement)
					setCompanies(cmp);
					setShowAddCompany(false);
					console.log('cmp---',companies);
				}
				const removeCompany=(key : any)=>{
					let cmp = [ ...companies ];
					cmp.splice(key, 1);
					console.log(cmp);
					setCompanies(cmp);
				}
				const renderRemoveCompanyBtn=(key : any)=>{
					return (
						<i className="mdi mdi-delete float-right" onClick={() => removeCompany(key)}></i>
					)
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




  return (
    <>
      <div className="row align-items-center" id="proBanner">
    <div className="col-3">Column 1
		        <form className="person-form">                     
            <div className="row col-sm-12 create-person-container">
                <div className="col-sm-12 ml-0 pl-0 mr-0 pr-0">
										<div className="row mb-3 page-bar">
												<div className="form-group col-sm-6">
                           
                        </div> 
												<div className="form-group col-sm-6 text-right">
													< Star />
                            < MoreVert />
                        </div> 
                        <div className="col-sm-12">
                            {/* <img alt="" className="logo-size"></img> */}
                            <MdPeople className="project_circle"></MdPeople>
														Renu Bala
                        </div>
                        
                    </div>
                    {/* person name */}
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                            <label>First Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("firstname", e.target.value)}/>
                        </div> 
                        <div className="form-group col-sm-12">
                            <label>Last Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("lastname", e.target.value)}/>
                        </div>
                    </div>

                    {/* spouse name */}
                    <div className="row mb-3">
                        <div className="form-group col-sm-12">
                            <label>Spouse First Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("spousefirstname", e.target.value)}/>
                        </div>      
                        <div className="form-group col-sm-12">
                            <label>Spouse Last Name</label>
                            <input type="input" className="form-control" onChange={(e)=> handleInputChange("spouselastname", e.target.value)}/>
                        </div>
                    </div>

                    {/* Contact type*/}
                    <div className="row mb-3">
                       <div className="form-group col-sm-12">
                           <label>Contact Type</label>                 
                           <select> </select>
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
                    

										{companies.map((fields : any, i : any) => (
											<div className="row mb-3" key={i.toString}>
												<div className="form-group col-sm-12 company-name-container">
                           <label>Company</label>
													 {i > 0 ? renderRemoveCompanyBtn(i) : <></>}   
                             <Typeahead
															id="basic-typeahead-single"
															options={companiesoptions}
															onChange={(selected) => handleCompanySelect("companyId",selected, i)}
															placeholder=""
														/>
													 
                        </div>  
                        <div className="form-group col-sm-12">
                            <label>Work WebSite</label>
                            <input type="input" className="form-control" onChange={(e)=> handleCompanySelect("website", e.target.value, i)}/>
                        </div>  
                        <div className="form-group col-sm-12">
                            <label>Title</label>
                            <input type="input" className="form-control" onChange={(e)=> handleCompanySelect("title", e.target.value, i)}/>
                        </div>
											</div>      
                    ))}
										<div className="row mb-3">
											<div className="form-group col-sm-12">
                            <a href="javascript:void(0);" className="btn btn-flat btn-warning" onClick={addCompany} style={showAddCompany ? {} : pageStyle.addCompanyBtn} aria-disabled="true"><i className="mdi mdi-plus"></i>ADD COMPANY</a>
                      </div>
										</div>
                    

                    {/* Email*/}
										{email.map((fields : any, i : any) => (
                    <div className="row mb-3" key={i}>
                        <div className="form-group col-sm-6">
                            <label>Email Type</label>
														{i > 0 ? renderRemoveEmailBtn(i) : <></>}
                            <select className="form-control" defaultValue={0} onChange={(e)=> handleEmailSelect("emailType", e.target.value, i)}>
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
                             <input type="email" className="form-control" onChange={(e)=> handleEmailSelect("email", e.target.value, i)}/>
                        </div> 
                    </div>
										))}
										<div className="row mb-3">
											<div className="form-group col-sm-12">
                            <a href="javascript:void(0);" className="btn btn-flat btn-warning" onClick={addEmail} style={showAddEmail ? {} : pageStyle.addCompanyBtn} aria-disabled="true"><i className="mdi mdi-plus"></i>ADD EMAIL</a>
                      </div>
										</div>
                    {/* Phone*/}
                    {phone.map((fields : any, i : any) => (
                    <div className="row mb-3" key={i}>
                        <div className="form-group col-sm-6">
                            <label>Phone Type</label>
														{i > 0 ? renderRemovePhoneBtn(i) : <></>}
                            <select className="form-control phone-type" defaultValue={0} onChange={(e)=> handlePhoneSelect("phoneType", e.target.value, i)} >                        
                                <option>Phone Type</option>
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
                            <input type="number" className="form-control" onChange={(e)=> handlePhoneSelect("phone", e.target.value, i)}/>
                        </div> 
                    </div>
										))}
										<div className="row mb-3">
											<div className="form-group col-sm-12">
                            <a href="javascript:void(0);" className="btn btn-flat btn-warning" onClick={addPhone} style={showAddPhone ? {} : pageStyle.addCompanyBtn} aria-disabled="true"><i className="mdi mdi-plus"></i>ADD PHONE</a>
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
                <div className="col-sm-12 padd-left-30 pull-right">
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
		
		
		
		
		</div>
    <div className="col-6">Column 2</div>
    <div className="col-3">Column 3</div>
  
      </div>
    </>
  );

};
export default PersonDetails;
