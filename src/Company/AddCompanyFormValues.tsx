import { Company } from "./Models/CompanyModel";

export interface AddCompanyFormValues {
    companyName: string;
    code: string;
}

export default function toCompany(values: AddCompanyFormValues): Company {
    const company: Company = {
        key: "",
        CompanyName: values.companyName,
        Code: values.code
    };

    return company;
}