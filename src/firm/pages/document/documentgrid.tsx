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
    const [loading, setLoading]: any = useState(false);


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
        });
    }

    return (
        <> 
        <div className="col-md-12 datatbale-row">
             <Grid columns={columns} rows={rows} progresspending={loading}/>
        </div>
        </>
      )
};

export default DocumentGrid;