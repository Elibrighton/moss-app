import { Company } from "./Models/CompanyModel";

export interface AddCompanyFormValues {
    companyName: string;
}

export default function toCompany(values: AddCompanyFormValues): Company {
    const company: Company = {
        key: "",
        Id: "",
        CompanyName: values.companyName,
    };

    return company;
}