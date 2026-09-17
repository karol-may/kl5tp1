import { useState } from "react";

function FormInput({idx, label, onChange}){
    return(        
        <div className="d-flex align-items-center m-2">
            <label className={"form-label p-2 m-0"} htmlFor={idx}>{label}:</label>
            <input id={idx} name={idx} className={"form-control ml-2"} onChange={onChange}/>
        </div>
    )
}

function Form(){

    let [link, setLink] = useState(null);
    let [label, setLabel] = useState(null);

    return (
        <form>
            <FormInput idx="link" label="Odnośnik" onChange={(e)=>{setLink(e.target.value)}}/>
            <FormInput idx="label" label="Opis" onChange={(e)=>{setLink(e.target.value)}}/>
            <button className={"btn btn-primary"}>Dodaj</button>  
            <p className="p-3">
                link: {link}<br/>
                label: {label}
            </p>          
        </form>
    )
}

export default Form;