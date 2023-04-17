import { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";

const Empedit = () => {

    const {empid}=useParams();
    // const [empdata,empdatachange]=useState({});
    console.log(empid)

    useEffect(()=>{
        fetch("http://localhost:8000/employee/" + empid).then((res)=>{
return res.json();
}).then((resp)=>{
    // newid(resp.id); 
    console.log(newname(resp.name));
newname(resp.name);
newphone(resp.phone);
newhobbies(resp.hobbies);
})

.catch((err)=>{
    console.log(err.message);
})
},[]);

const [id,newid]=useState("");
const[name,newname]=useState("");
const[phone,newphone]=useState();
const[hobbies,newhobbies]=useState("");

const navigate=useNavigate();


const handleSubmit=(e)=>{
e.preventDefault();
const empdata={name,phone,hobbies};



fetch("http://localhost:8000/employee/"+empid   ,{
    method:"PUT",
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
               <div className="card-title"> <h1>Edit Page</h1></div>

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
 
export default Empedit;