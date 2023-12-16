const mockData: any = {
    countries: [
        {
            label: "Nepal",
            value: "Nepal",
        },
        {
            label: "India",
            value: "India",
        },
        {
            label: "China",
            value: "China",
        }
    ],
    provinces: {
        "Nepal": [
            { label: "Madhesh", value: "Madhesh" },
            { label: "Bagmati", value: "Bagmati" },
            // { label: "Gandaki", value: "Gandaki" },
            // { label: "Lumbini", value: "Lumbini" },
            // { label: "Karnali", value: "Karnali" },
            // { label: "Sudurpaschim", value: "Sudurpaschim" }
        ],
        "India": [],
        "China": [],
    },
    districts: {
        "Madhesh": [
            { label: "Sarlahi", value: "Sarlahi" },
            { label: "Dhanusha", value: "Dhanusha" },
            { label: "Bara", value: "Bara" },
            { label: "Rautahat", value: "Rautahat" },
            { label: "Saptari", value: "Saptari" },
            { label: "Siraha", value: "Siraha" },
            { label: "Mahottari", value: "Mahottari" },
            { label: "Parsa", value: "Parsa" }
        ],
        "Bagmati": [
            { label: "Sindhuli", value: "Sindhuli" },
            { label: "Ramechhap", value: "Ramechhap" },
            { label: "Dolakha", value: "Dolakha" },
            { label: "Bhaktapur", value: "Bhaktapur" },
            { label: "Dhading", value: "Dhading" },
            { label: "Kathmandu", value: "Kathmandu" },
            { label: "Kavrepalanchok", value: "Kavrepalanchok" },
            { label: "Lalitpur", value: "Lalitpur" },
            { label: "Nuwakot", value: "Nuwakot" },
            { label: "Rasuwa", value: "Rasuwa" },
            { label: "Sindhupalchok", value: "Sindhupalchok" },
            { label: "Chitwan", value: "Chitwan" },
            { label: "Makwanpur", value: "Makwanpur" }
        ]
    },
}

const apiSimulator = (data: any) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 200)
    })
}

export const fetchCountries = () => {
    return apiSimulator(mockData.countries)
}
export const fetchProvinces = (country: string) => {
    return apiSimulator(mockData.provinces[country])
}
export const fetchDistricts = (province: string) => {
    return apiSimulator(mockData.districts[province])
}
