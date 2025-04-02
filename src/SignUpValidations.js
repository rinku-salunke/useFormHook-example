export const fullNameValidation={
    required:{value:true, message:"fullname is must...!"},
    minLength:{value:15, message:"fullname is too short..."},
    maxLength:{value:25, message:"fullName is too large...!"}
}

export const emailIdValidation={
    required:{value:'true', message:"EmailId is must...!"},
    minLength:{value:15, message:"EmailId is too short...!"},
    maxLength:{value:30, message:"EmailId id too large...!"},
    pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"Enter Correct EmailId"}
}


export const AgeValidation={
    required:{value:true, message:"Age is must...!"},
    min:{value:18, message:"Age is too less...!"},
    max:{value:40, message:"Age is too more...!"}
}

export const commonRequired={
    required:{value:true, message:"This Field is required"}
}


export const contactValidation={
    required:{value:true, message:"Contact Number Must Be Required"},
    min:{value:10, message:"Enter 10 digit mobile  number"},
    max:{value:12, message:"enter correct mobile number"}
}

export const AddreesValidation={
    required:{value:true, message:"address must be required"},
    minLength:{value:15, message:"Address is too short...!"},
    maxLength:{value:20, message:"Address is too big...!"}
}

