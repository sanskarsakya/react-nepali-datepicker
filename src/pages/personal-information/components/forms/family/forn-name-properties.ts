// generate form name properties for following object
// ```
// {
//     Salutation: "",
//     FullName: "",
//     Relation: "",
//     Nationality: "",
//     CitizenshipNo: "",
//     NationalIdNo: "",
//     Occupation: "",
//     Organization: "",
//     Note: "", 
// }
// ```
// like this
// export const formNameProperties = {
//     isImport: {
//         label: "Is Import",
//         name: "isImport",
//         value:""
//     },
// }   
// ```

export const formNameProperties = {
    Salutation: {
        label: "Salutation",
        name: "Salutation",
        value: ""
    },
    FullName: {
        label: "Full Name",
        name: "FullName",
        value: ""
    },
    Dob: {
        label: "Date of Birth",
        name: "Dob",
        value: ""
    },
    Relation: {
        label: "Relation",
        name: "Relation",
        value: ""
    },
    Nationality: {
        label: "Nationality",
        name: "Nationality",
        value: ""
    },
    CitizenshipNo: {
        label: "Citizenship No",
        name: "CitizenshipNo",
        value: ""
    },
    NationalIdNo: {
        label: "National ID No",
        name: "NationalIdNo",
        value: ""
    },
    Occupation: {
        label: "Occupation",
        name: "Occupation",
        value: ""
    },
    Organization: {
        label: "Organization",
        name: "Organization",
        value: ""
    },
    Note: {
        label: "Note",
        name: "Note",
        value: ""
    }
};

export function getDefaultValues(obj: any) {
    const mapped:any = {}
    Object.entries(obj).forEach(([key, value]:any) => {
        if(!mapped[key]) {
            mapped[key] = value.value 
        }
    })
    return mapped
}