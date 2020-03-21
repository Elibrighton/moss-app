import { observable, action } from 'mobx'
import { Company } from './Models/CompanyModel';
import { gateway } from './CompanyGateway';


export class CompanyStore {
    @observable companyList: Company[] = [];
    @observable companyListState: string = "pending";
    @observable addCompanyState: string = "pending";
    @observable editCompanyState: string = "pending";
    @observable deleteCompanyState: string = "pending";

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
    editCompany(company: Company) {
        gateway.EditCompany(company)
            .then(() => {
                this.editCompanyState = "done";
            })
    }

    @action
    deleteCompany(id: string) {
        gateway.DeleteCompany(id)
            .then(() => {
                this.deleteCompanyState = "done";
                this.getCompanyList();
            })
    }

    @action
    resetCompanyList() {
        if (this.companyListState !== "pending") {
            this.companyListState = "pending";
        }
        if (this.deleteCompanyState !== "pending") {
            this.deleteCompanyState = "pending";
        }
    }

    @action
    resetAddCompany() {
        if (this.addCompanyState !== "pending") {
            this.addCompanyState = "pending";
        }
    }

    @action
    resetEditCompany() {
        if (this.editCompanyState !== "pending") {
            this.editCompanyState = "pending";
        }
    }
}

export const store = new CompanyStore();