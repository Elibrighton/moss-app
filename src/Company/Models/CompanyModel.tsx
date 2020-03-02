export type Company = {
    key: string,
    Id: string;
    CompanyName: string;
}

export type CompanyDto = {
    Id: string;
    Name: string;
}

export default function updateFromDto(companyDto: CompanyDto): Company {
    const company: Company = {
        key: companyDto.Id,
        Id: companyDto.Id,
        CompanyName: companyDto.Name,
    };

    return company;
}

export function toDto(company: Company): CompanyDto {
    const companyDto: CompanyDto = {
        Id: company.Id,
        Name: company.CompanyName
    };

    return companyDto;
}