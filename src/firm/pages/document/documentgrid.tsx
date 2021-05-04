import React, { useEffect, useState } 
from "react";
import { Modal, Form, Tabs, Tab} from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Grid from "../../../components/dataTable";
import DocumentService from '../../../services/documentService';

const DocumentGrid = () => {    
    const [columns, setColumns] = useState([] as any[]);
    const [rows, setRows] = useState([] as any[]);
    const [loading, setLoading]: any = useState(true);
    const [selectedRow, setSelectedRow] = useState([] as string[]);

    useEffect(() => {   
        let loginuser: any = localStorage.getItem("user");
        let user = JSON.parse(loginuser); 
      if(user.FirmId > 0 && user.EmployeeId > 0)
        {  
          console.log("logged in firmid = "+user.FirmId);
          console.log("logged in employeeid = "+ user.EmployeeId);
          getDocuments(user);      
        }
      else
        {
          console.log("no filter found");
        }
      }, []);

      const getDocuments= async(filter_data : any)=> {     
        let service = new DocumentService();   
        console.log("filter_data = ",filter_data); 
    
        var starttime = performance.now();  
        await service.GetAllDocuments(filter_data).then((data) => { 
          console.log("get all document Response", data); 
          var endtime = performance.now();
          var timetaken_request = endtime - starttime;
          console.log("time taken in request = "+timetaken_request);
          var columnarr : any=[]; 
      if(data.Columns !== null && data.Columns !== "" && data.Columns !== "undefined")
      {
        columnarr = data.Columns.split(",");
        console.log("columnarray are "+columnarr);
        var colarr : any = [];
        // colarr.push({
        //     name: "",
        //     selector: "settings",
        //     sortable: true,
        //     width: 50,
        //   });
        columnarr.forEach(function(column : any, index : number){
         // if(column == "")
          colarr.push({name : column, selector : column , sortable : true});          
        });
        setColumns(colarr);
      }      
      console.log("final columns" ,columns);

      if( data.DocumentList !== null &&  data.DocumentList !== undefined &&  data.DocumentList.length > 0)
      {      
        data.DocumentList.forEach(function (row: any, index: number) {
            //Document Name,Contact Record,Price,Type,Subjects Tags,Year Tags,Format,Uploaded By,Uploaded On,Viewed On
            row["Document Name"] = (
              <a
                href="javascript:void(0)"                
              > 
                {row.DocumentName}
              </a>
            );           
            row["Contact Record"] = (<span> {row.ContactRecord} </span>);
            row["Subjects Tags"] = (<span> {row.SubjectTags} </span>);
            row["Year Tags"] = (<span> {row.YearTag} </span>);
            row["Format"] = (<span> {row.FileType} </span>);
            row["Uploaded By"] = (<span> {row.UploadedBy} </span>);
            row["Uploaded On"] = (<span> {row.AddedOnFormatted} </span>);
            row["Viewed On"] = (<span> {row.ViewedOnFormatted} </span>);            
          });
          console.log("list is =",rows);
          setRows(data.DocumentList); 
        }
        else{
          console.log("not able to get records");
        }
        });
        setLoading(false);
    }
   
    function onSelectRowsHandler(row:any) {
      setSelectedRow(
        row.selectedRows.map((item: any) => {
            return item.DocumentId;
        })
      )
      console.log("selected user= "+selectedRow);
      console.log("selected users are here");
    }

    return (
        <> 
        <div className="col-md-12 datatbale-row">
             <Grid columns={columns} rows={rows} progresspending={loading} onSelectedRowsChange={(row : any) => onSelectRowsHandler(row)}/>
        </div>
        </>
      )
};

export default DocumentGrid;