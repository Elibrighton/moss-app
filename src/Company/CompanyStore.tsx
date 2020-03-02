import { observable, action } from 'mobx'
import { Company } from './Models/CompanyModel';
import { gateway } from './CompanyGateway';


export class CompanyStore {
    @observable companyList: Company[] = [];
    @observable companyListPromiseIsPending: boolean = true;

    @action
    getCompanyList() {
        gateway.GetCompanyList()
            .then((companyList) => {
                this.companyList = companyList;
                this.companyListPromiseIsPending = false;
            })
    }
}

export const store = new CompanyStore();