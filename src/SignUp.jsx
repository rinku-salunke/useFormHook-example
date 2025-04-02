import { useForm } from "react-hook-form";
import './App.css'
import { fullNameValidation , emailIdValidation,AgeValidation,commonRequired,contactValidation,AddreesValidation} from "./SignUpValidations";
import axios from "axios";

function SignUp(){

    const{register,handleSubmit,reset,setValue, formState:{errors}}=useForm()

    function onSaveData(data){

    console.log(data);
    axios.post("http://localhost:5000/students", data)
         .then(res=>{
            if(res.status===201){
                alert("students details saved...!");
                reset();

            }
         })
         .catch(error=>{
            alert("Something Went Wrong...!");
            console.log(error);
         })
}

function onResestForm(){
reset();
}

function onSetStudentInfo(){
    setValue("fullName", "Rinku A Salunke");
    setValue("age" ,22);
    setValue("contactNumber",9665463595);
    setValue("gender","MALE");
    setValue("courses",['Java','React']);
}

return (
    <div className="box">
    <h1>Sign  Up Here...!</h1>
    <form onSubmit={handleSubmit(onSaveData)}>

    <p>{errors.fullName && errors.fullName.message}</p>
    Enter FullName:<input type="text"  {...register('fullName', fullNameValidation)}/> <br></br>

    
    <p>{errors.age && errors.age.message}</p>
    Enter Age:<input type="text"  {...register('age',AgeValidation)}/> <br></br>

    <p>{errors.contactNumber && errors.contactNumber.message}</p>
    Enter Contact Number:<input type="text"  {...register('contactNumber',contactValidation)}/> <br></br>

    
    <p>{errors.address && errors.address.message}</p>
    Enter Address:<input type="text" {...register('address',AddreesValidation)}/><br></br>

    <p>{errors.email && errors.email.message}</p>
    Enter Email Id:<input type="email" {...register('email',emailIdValidation)}/><br></br>

    <p>{errors.gender && errors.gender.message}</p>
    Select Gender:Male:<input type="radio" value={'MALE'}{...register('gender',commonRequired)}/> 
    Female:<input type="radio" value={'FEMALE'}{...register('gender',commonRequired)}/> 
    Others:<input type="radio" value={'OTHERS'}{...register('gender',commonRequired)}/> <br></br>
   

    <p>{errors.courses && errors.courses.message}</p>
    Select Interested Courses:
    Java:<input type="checkbox" value={'Java'}{...register('courses',commonRequired)}/>
    Python:<input type="checkbox" value={'Python'}{...register('courses',commonRequired)}/>
    AWS:<input type="checkbox" value={'AWS'}{...register('courses',commonRequired)}/>
    React:<input type="checkbox" value={'react'}{...register('courses',commonRequired)}/><br></br>
 

    <p>{errors.batchMode && errors.batchMode.message}</p>
    Select Mode <select {...register('batchMode',commonRequired)}>
    <option value="OFFLINE">Offline</option>
    <option value="ONLINE">Online</option>
    </select>
    <br></br>
    <button type="submit">Submit</button>
    <button className="btn btn-warning" type="button" onClick={onResestForm}>Reset</button>
    <button className="btn btn-info"  type="button" onClick={onSetStudentInfo}>Set Student Info</button>
    </form>
    </div>
    
    )
    }
    
export default SignUp;


