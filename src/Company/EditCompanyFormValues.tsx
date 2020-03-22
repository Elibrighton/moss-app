import { Company } from "./Models/CompanyModel";

export interface EditCompanyFormValues {
    key: string;
    companyName: string;
    code: string;
}

export default function toCompany(values: EditCompanyFormValues): Company {
    const company: Company = {
        key: values.key,
        CompanyName: values.companyName,
        Code: values.code
    };

    return company;
}