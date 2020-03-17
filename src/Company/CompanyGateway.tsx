import axios from 'axios';
import updateFromDto, { CompanyDto, Company, toDto } from './Models/CompanyModel';

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

    async AddCompany(company: Company): Promise<void> {
        const companyDto: CompanyDto = toDto(company);

        return axios.post("/api/companies", companyDto)
    }
}

export const gateway = new CompanyGateway();