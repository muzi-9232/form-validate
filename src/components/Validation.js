export default function Validation(values){
    const errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const password_pattern = /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{8,}$/

    if(values.name === ""){
        errors.name = "Name is required"
    }

    if(values.email === ""){
        errors.email = "Email is required"
    }else if(!email_pattern.test(values.email)){
        errors.email = "Email did not match"
    }

    if(values.password === ""){
        errors.password = "Password is required"
    }else if(!password_pattern.test(values.password)){
        errors.password = "password did not match"
    }

    return errors;


}