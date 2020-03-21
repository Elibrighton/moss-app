import { Company } from "./Models/CompanyModel";

export interface EditCompanyFormValues {
    key: string;
    companyName: string;
}

export default function toCompany(values: EditCompanyFormValues): Company {
    const company: Company = {
        Key: values.key,
        CompanyName: values.companyName,
    };

    return company;
}