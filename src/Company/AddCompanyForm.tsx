import { Form, Field } from "react-final-form";
import React from "react";
import { inject, observer } from "mobx-react";
import { CompanyStore } from './CompanyStore'
import { Company } from "./Models/CompanyModel";
import toCompany, { AddCompanyFormValues } from "./AddCompanyFormValues";
import { Redirect } from "react-router-dom";

interface IAddCompanyFormProps {
    store?: CompanyStore;
}

@inject('store')
@observer
export default class AddCompanyForm extends React.Component<IAddCompanyFormProps> {
    componentWillUnmount() {
        const { store } = this.props;
        store!.resetAddCompany()
    }
    render() {
        const { store } = this.props;
        const { addCompanyState } = store!;
        const onSubmit = async (values: AddCompanyFormValues) => {
            const company: Company = toCompany(values);
            store!.addCompany(company);
        };
        if (addCompanyState === "done") {
            return (<Redirect to="/companies" />);
        }
        return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Add company</h2>
                        <div>
                            <label>Company Name</label>
                            <Field name="companyName" component="input" required />
                        </div>
                        <div>
                            <label>Code</label>
                            <Field
                                name="code"
                                component="input"
                                type="text"
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                )}
            />
        )
    }
}
