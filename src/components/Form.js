import { useState } from "react";

function FormInput({idx, label, value, onChange, isValid}){
    return(
    <>
        <div className={"d-flex p-2 align-items-center"}>
            <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
            <input className={"form-control"} value={value} id={idx} name={idx} onChange={onChange}/>
        </div>
        {isValid&&<div className={""}>Pole jest puste!</div>}
    </>
    )
}


function Form(){

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");

    let [linkIsValid, setLinkIsValid] = useState(false);

    function resetForm(){
        setLabel("");
        setLink("");
    }

    function validateFieldLink(){
        if(link==""){
            setLinkIsValid(false)            
            return false; // do usuniecia
        }
    }

    function validateFieldLabel(){
        return false; 
    }

    function validateForm(){
        return (
            validateFieldLabel() 
            && validateFieldLink()
        );
    }

    return (
        <form>
            <FormInput 
                idx={"link"} 
                label={"Odnośnik"} 
                onChange={(e)=>{setLink(e.target.value)}}
                value={link}
            />
            <FormInput 
                idx={"label"} 
                label={"Opis"}
                onChange={(e)=>{setLabel(e.target.value)}}
                value={label}
            />
            <div className={"d-flex justify-content-around"}>
                <button className={"btn btn-primary"}>Dodaj</button>
                <button onClick={(e)=>{e.preventDefault(); resetForm()}} className={"btn btn-danger"}>Wyczyść</button>
            </div>
            <pre>
                Link: {link}<br/>
                Label: {label}
            </pre>
        </form>
    );
}

export default Form;