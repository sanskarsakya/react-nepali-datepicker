export interface IFamilyMember {
    Relation: string;
    Name: string;
    DateOfBirth: string | null;
}

export interface IAddressData {
    PECountyName: string;
    PELocality: string;
    PEDistrict: string;
    PEZone: string;
    PEHouseNo: string;
    PEStreet: string;
    PEState: string;
    PEWardNo: string;
    PEVDCMuncipality: string;
    PSLocality: string;
    PSDistrict: string;
    PSZone: string;
    PSCountryName: string;
    PSVDCMuncipality: string;
    PSWardNo: string;
    PSHouseNo: string;
    PSStreet: string;
    PSState: string;
    PEProvince: string;
    PSProvince: string;
    PELocalBodyName: string;
    PELocalBodyNameNepali: string | null;
    PSLocalBodyName: string | null;
    PSLocalBodyNameNepali: string | null;
    GeoLocation: any; // Replace with specific type if available
    PEProvinceId: number;
    PSDistrictId: number;
    PELocalBodyId: number;
    PSLocalBodyId: number;
}

export interface IEducationAndTraining {
    SN: number;
    Education: string;
    Course: string;
    College: string;
    University: string;
    Place: string | null;
    Percentage: string | null;
    Venue: string;
    PassedYear: string;
}

export interface IHealthData {
    BloodGroup: string;
    ContitionTypeName: string;
    HospitalClinicName: string;
    HospitalAddress: any; // Replace with specific type if available
    DoctorName: string;
    PhoneNumber: string;
}

export interface IEmployeeData {
    OfficeEmail: string;
    OfficePhone: string;
    PersonalPhone: string;
    PersonalMobile: string;
    PersonalEmail: string;
    OfficeMobileNumber: string | null;
}

export interface IPersonalDetailData {
    EmployeeName: string;
    MaritalStatus: string;
    Gender: string;
    DateOfBirth: string;
    Nationality: string | null;
}

export interface IPersonalInformation {
    EmployeeContacts: IEmployeeData;
    PersonalDetail: IPersonalDetailData;
    Family: IFamilyMember[];
    EmployeeAddress: IAddressData;
    EducationAndTraining: IEducationAndTraining[];
    Identification: any[]; // Replace with specific type if available
    Health: IHealthData;
}

