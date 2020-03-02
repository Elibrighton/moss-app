import axios from 'axios';
import updateFromDto, { CompanyDto, Company } from './Models/CompanyModel';

export class CompanyGateway {
    async GetCompanyList(): Promise<Company[]> {
        let companyList: Company[] = [];
        await axios.get("/api/companies")
            .then(res => {
                const companyDtoList: CompanyDto[] = res.data;
                companyList = companyDtoList.map((companyDto) => updateFromDto(companyDto));
            })
        return companyList;
    }
}

export const gateway = new CompanyGateway();