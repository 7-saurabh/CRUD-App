import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// import Empdetails from "./Empdetails";



const Emplisting = () => {

const [empdata,empdatachange]=useState(null);
const navigate=useNavigate();

const LoadEdit=(id)=>{
    navigate("/employee/edit/" + id );

}

const Removefunction=(id)=>{
   if(window.confirm("Do you want to remove?")){
    
fetch("http://localhost:8000/employee/" + id,{
    method:"DELETE"
}).then((res)=>{
alert("Removed Succesfully");
window.location.reload();
}).catch((err)=>{
    console.log(err.message);
})

   }
}

useEffect(()=>{
fetch("  http://localhost:8000/employee").then((res)=>{
return res.json();
}).then((resp)=>{
empdatachange(resp);
}).catch((err)=>{
    console.log(err.message); 
})
},[])

    return (
        <>
        <div className="container">
        <div className="card">
            <div className="card-title">
                <h2 className="text-center">Information</h2>
            </div>
            <div className="card-body">

                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                        {/* <td>Id</td> */}
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Hobbies</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    { empdata &&
                        empdata.map(item=>(
                            <tr key={item.id}>

                                {/* <td>{item.id}</td> */}
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.hobbies}</td>
             <td><a className="btn btn-success m-2" onClick={()=>{LoadEdit(item.id)}}>Edit</a>
                                <a className="btn btn-danger m-2" onClick={()=>{Removefunction(item.id)}}>Delete</a></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div className="divbtn ">
            <Link  to="employee/create" className="btn btn-success">Add New (+)</Link>
</div>
                <div>
                 
                </div>
            </div>
        </div>

        </div>
        </>
      );
}
 
export default Emplisting;