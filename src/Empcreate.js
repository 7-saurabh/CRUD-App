import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Empcreate = () => {

const[name,newname]=useState("");
const[phone,newphone]=useState();
const[hobbies,newhobbies]=useState("");

const navigate=useNavigate();


const handleSubmit=(e)=>{
e.preventDefault();
const empdata={name,phone,hobbies};



fetch("http://localhost:8000/employee",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empdata)
}).then((res)=>{
alert("Saved Succesfully");
navigate("/");
}).catch((err)=>{
    console.log(err.message);
})
}

    return ( 
        <div>
        <div className="row">
        <form className="container" onSubmit={handleSubmit}>
        <div className="offset-lg-3 col-lg-6">
            <div className="card">
               <div className="card-title"> <h1>Add Data</h1></div>

               <div className="card-body">
                <div className="row">
                
               
               <div className="col-lg-12">
               <div className="form-group">
                <label>Name:</label>
                <input value={name} onChange={e=>newname(e.target.value)} className="form-control"></input>
               </div>
               </div>

               <div className="col-lg-12">
               <div className="form-group">
                <label>Phone:</label>
                <input type="number" value={phone} onChange={e=>newphone(e.target.value)}  className="form-control"></input>
               </div>
               </div>

               <div className="col-lg-12">
               <div className="form-group">
                <label>Hobbies:</label>
                <input value={hobbies} onChange={e=>newhobbies(e.target.value)}  className="form-control"></input>
               </div>
               </div>

               <div className="col-lg-12">
               <div className="form-group">
                <button type="submit" className="btn btn-success">Save</button>
           <Link to="/" className="btn btn-danger m-lg-2">Back</Link>

               </div>
               </div>

            
            </div>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
     );
}
 
export default Empcreate;