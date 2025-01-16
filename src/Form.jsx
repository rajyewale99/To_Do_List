import { useState } from "react";
import { useFormik } from "formik";

export default function Form(){
    // let[fullname,setFullname]=useState("");
    // let[userName, setUsername]= useState("");
    let[formData, setformData]= useState({userName:"", fullname:""})
    

    // let handlefullNameChange = (event)=>{
    //     setFullname(event.target.value);
    // }
    // let handleuserNameChange = (event)=>{
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) =>{
        // let fieldName = event.target.name;
        console.log(fieldName);
        let newVal = event.target.value;
        console.log(newVal);

        setformData((currData)=>{
            currData=newVal; //[fieldName]
            return {...currData, newVal}; //[fieldName]:
        });
    };
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
    setformData({
        fullName:"",
        userName:"",
        password:""
    });
};

    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Fullname</label>
            <input placeholder="Enter Your Name" type="text" 
            value={formData.fullName} onChange={handleInputChange} 
            id="fullName" name="fullName"/>
            <br></br>
            <label htmlFor="userName"> Username</label>
            <input placeholder="Enter Your Username" type="text" 
            value={formData.userName} onChange={handleInputChange} 
            id="userName" name="userName"/>
             <br></br>
            <label htmlFor="password"> Username</label>
            <input placeholder="Enter Your Password" type="password" 
            value={formData.password} onChange={handleInputChange} 
            id="password" name="password"/>
            <button>Submit</button>
        </form>
    )
}

//Formik is used to madd form validations.     it is a tool