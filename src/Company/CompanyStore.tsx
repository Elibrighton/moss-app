import { observable, action } from 'mobx'
import { Company } from './Models/CompanyModel';
import { gateway } from './CompanyGateway';


export class CompanyStore {
    @observable companyList: Company[];
    @observable companyDetails: Company;
    @observable companyListState: string = "pending";
    @observable getCompanyState: string = "pending";
    @observable addCompanyState: string = "pending";
    @observable editCompanyState: string = "pending";
    @observable deleteCompanyState: string = "pending";

    constructor() {
        this.companyList = [];
        this.companyDetails = { key: "", CompanyName: "", Code: "" };
        this.companyListState = "pending";
        this.getCompanyState = "pending";
        this.addCompanyState = "pending";
        this.editCompanyState = "pending";
        this.deleteCompanyState = "pending";
    }
    @action
    getCompanyList() {
        gateway.GetCompanyList()
            .then((companyList) => {
                this.companyList = companyList;
                this.companyListState = "done";
            })
    }

    @action
    getCompany(key: string) {
        gateway.GetCompany(key)
            .then((companyDetails) => {
                this.companyDetails = companyDetails;
                this.getCompanyState = "done";
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
    deleteCompany(key: string) {
        gateway.DeleteCompany(key)
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
    resetGetCompany() {
        if (this.getCompanyState !== "pending") {
            this.getCompanyState = "pending";
            this.companyDetails = { key: "", CompanyName: "", Code: "" };
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