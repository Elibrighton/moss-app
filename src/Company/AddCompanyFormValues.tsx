import { Company } from "./Models/CompanyModel";

export interface AddCompanyFormValues {
    companyName: string;
}

export default function toCompany(values: AddCompanyFormValues): Company {
    const company: Company = {
        Key: "",
        CompanyName: values.companyName,
    };

    return company;
}