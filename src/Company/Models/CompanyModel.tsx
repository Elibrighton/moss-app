export type Company = {
    Key: string;
    CompanyName: string;
}

export type CompanyDto = {
    Id: string;
    Name: string;
}

export default function updateFromDto(companyDto: CompanyDto): Company {
    const company: Company = {
        Key: companyDto.Id,
        CompanyName: companyDto.Name,
    };

    return company;
}

export function toDto(company: Company): CompanyDto {
    const companyDto: CompanyDto = {
        Id: company.Key,
        Name: company.CompanyName
    };

    return companyDto;
}