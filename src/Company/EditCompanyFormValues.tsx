import { Company } from "./Models/CompanyModel";

export interface EditCompanyFormValues {
    id: string;
    companyName: string;
}

export default function toCompany(values: EditCompanyFormValues): Company {
    const company: Company = {
        key: "",
        Id: values.id,
        CompanyName: values.companyName,
    };

    return company;
}