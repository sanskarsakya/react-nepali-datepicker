// generate form name properties for following object
// ```
// {
//     BloodGroup: "",
//     Height: "",
//     Weight: "",
//     Birthmark: "",
//     HealthStatus: "",
//     Diagnosed: "",
//     DiagnosedDate: "",
//     OngoingTreatment: "",
//     DoctorName: "", 
//     DoctorContact: "", 
//     HospitalName: "", 
//     HospitalContact: "", 
//     HospitalDiagnosisSummary: "", 
//     EmergencyContactPerson: "", 
//     Relation: "", 
//     EmergencyContactPhone: "", 
//     Disablilty: "", 
//     DisabilityDescription: "", 
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
    BloodGroup: {
        label: "Blood Group",
        name: "BloodGroup",
        value: ""
    },
    Height: {
        label: "Height {feet-inch}",
        name: "Height",
        value: ""
    },
    Weight: {
        label: "Weight (kg)",
        name: "Weight",
        value: ""
    },
    Birthmark: {
        label: "Birthmark",
        name: "Birthmark",
        value: ""
    },
    HealthStatus: {
        label: "Health Status",
        name: "HealthStatus",
        value: ""
    },
    Diagnosed: {
        label: "Diagnosed",
        name: "Diagnosed",
        value: ""
    },
    DiagnosedDate: {
        label: "Diagnosed Date",
        name: "DiagnosedDate",
        value: ""
    },
    OngoingTreatment: {
        label: "Ongoing Treatment",
        name: "OngoingTreatment",
        value: ""
    },
    DoctorName: {
        label: "Doctor Name",
        name: "DoctorName",
        value: ""
    },
    DoctorContact: {
        label: "Doctor Contact",
        name: "DoctorContact",
        value: ""
    },
    HospitalName: {
        label: "Hospital Name",
        name: "HospitalName",
        value: ""
    },
    HospitalContact: {
        label: "Hospital Contact",
        name: "HospitalContact",
        value: ""
    },
    HospitalDiagnosisSummary: {
        label: "Hospital Diagnosis Summary",
        name: "HospitalDiagnosisSummary",
        value: ""
    },
    EmergencyContactPerson: {
        label: "Emergency Contact Person",
        name: "EmergencyContactPerson",
        value: ""
    },
    Relation: {
        label: "Relation",
        name: "Relation",
        value: ""
    },
    EmergencyContactPhone: {
        label: "Emergency Contact Phone",
        name: "EmergencyContactPhone",
        value: ""
    },
    Handicapped: {
        label: "Handicapped",
        name: "Handicapped",
        value: ""
    },
    DisabilityDescription: {
        label: "Disability Description",
        name: "DisabilityDescription",
        value: ""
    }
};
