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

    async GetCompany(id: string): Promise<Company> {
        let company: Company = { key: "", CompanyName: "", Code: "" };
        await axios.get("/api/companies/" + id)
            .then(res => {
                const companyDto: CompanyDto = res.data;
                company = updateFromDto(companyDto);
            })
        return company;
    }

    async AddCompany(company: Company): Promise<void> {
        const companyDto: CompanyDto = toDto(company);

        return axios.post("/api/companies", companyDto)
    }

    async EditCompany(company: Company): Promise<void> {
        const companyDto: CompanyDto = toDto(company);

        return axios.put("/api/companies/" + companyDto.Id, companyDto)
    }

    async DeleteCompany(id: string): Promise<void> {
        return axios.delete("/api/companies/" + id)
    }
}

export const gateway = new CompanyGateway();