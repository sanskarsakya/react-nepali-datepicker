export interface AddressData {
    AddressId: number;
    CountryId: number;
    ProvinceId: number;
    Locality: string;
    DistrictId: number;
    LocalBodyId: number | null;
    WardNo: string;
    ZoneId: number;
    HouseNo: string;
    Street: string;
    State: string;
    ZipCode: string;
}

export interface AddressChange {
    RequestId: string;
    NewData: AddressData;
    OldData: AddressData;
    FId: string;
    Action: string;
}

export interface PersonalInformationData {
    RequestId: string;
    NewData: {
        Name: string | null;
        DateOfBirthEng: string | null;
        DateOfBirth: string;
        Gender: string | null;
        MaritalStatus: string;
    };
    OldData: {
        Name: string;
        DateOfBirthEng: string;
        DateOfBirth: string;
        Gender: number;
        MaritalStatus: string;
    };
    FId: string | null;
    Action: string;
}

export interface PendingRequest {
    AdditionalDocuments: any[];
    PermanentAddress: AddressChange;
    CurrentAddress: AddressChange;
    Citizenship: any;
    DrivingLicence: any;
    Education: any[];
    Family: any[];
    Health: any;
    HomeContact: any;
    OfficeContact: any;
    Training: any;
    Passport: any;
    PersonalInformation: PersonalInformationData;
}


