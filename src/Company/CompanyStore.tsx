import { observable, action } from 'mobx'
import { Company } from './Models/CompanyModel';
import { gateway } from './CompanyGateway';


export class CompanyStore {
    @observable companyList: Company[] = [];
    @observable companyListState: string = "pending";
    @observable addCompanyState: string = "pending";

    @action
    getCompanyList() {
        gateway.GetCompanyList()
            .then((companyList) => {
                this.companyList = companyList;
                this.companyListState = "done";
            })
    }

    @action
    addCompany(company: Company) {
        gateway.AddCompany(company)
            .then(() => {
                this.addCompanyState = "done";
            })
    }

    @action
    resetCompanyList() {
        this.companyListState = "pending";
    }

    @action
    resetAddCompany() {
        this.addCompanyState = "pending";
    }
}

export const store = new CompanyStore();