export type Company = {
    key: string;
    CompanyName: string;
    Code: string;
}

export type CompanyDto = {
    Id: string;
    Name: string;
    Code: string;
}

export default function updateFromDto(companyDto: CompanyDto): Company {
    const company: Company = {
        key: companyDto.Id,
        CompanyName: companyDto.Name,
        Code: companyDto.Code
    };

    return company;
}

export function toDto(company: Company): CompanyDto {
    const companyDto: CompanyDto = {
        Id: company.key,
        Name: company.CompanyName,
        Code: company.Code
    };

    return companyDto;
}