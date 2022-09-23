import { Button } from "bootstrap";
import React, { useState } from "react";
function Multiple()
{
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value)
        setData({...data, [name]:value})

    }
    const [record,setRecord]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newdata={...data,id:new Date().getTime().toString() };
        console.log(record)

        setRecord([...record,newdata]);
        console.log(record)
        setData({username:"",email:"",phone:"",password:""})
    }
    return(
        <>
       <br/>
       <br/>
       <br/>
       
        <form action="" onSubmit={handleSubmit} className="text-center">
            <div>
                <br></br>
                <label htmlFor="FullName">FullName</label>
                <br/>
                <input type="text" id="FullName" 
                value={data.username}
                onChange={handleInput}
                name="username"></input>
            </div>
            <br/> 
            <div>
                <label htmlFor="Email">Email</label>
                <br/>
                <input type="text" id="Email" autoComplete="off"
                value={data.email}
                onChange={handleInput}
                name="email"></input>
            </div>
            <br/>
            <div>
                <label htmlFor="Phone">Phone</label><br/>
                <input type="text" id="phone" autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                name="phone"></input>
            </div>
            <br/>
            <div>
                <label htmlFor="Password">Password</label><br/>
                <input type="text" id="password" 
                value={data.password}
                onChange={handleInput}
                name="password"></input>
            </div><br/>
            <button type="submit">Submit</button>
        </form>
        
        <div className="text-center" style={{ color:"white"}}>
            <br></br>
          {  
            record.map((cur)=>{
                return(
                   <table><tr>
                    <td>{cur.username}</td>
                    <td>{cur.email}</td>
                    <td>{cur.phone}</td>
                    <td>{cur.password}</td>
                    </tr></table>
                )
            })
          }
        </div>
        </>
    )
}
export default Multiple;