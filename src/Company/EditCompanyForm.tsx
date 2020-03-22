import { Form, Field } from "react-final-form";
import React from "react";
import { inject, observer } from "mobx-react";
import { CompanyStore } from './CompanyStore'
import { Company } from "./Models/CompanyModel";
import toCompany, { EditCompanyFormValues } from "./EditCompanyFormValues";
import { Redirect, RouteComponentProps } from "react-router-dom";
import * as querystring from "query-string";

interface RouteParams {
    key: string
}

interface IEditCompanyFormProps extends RouteComponentProps<RouteParams> {
    store?: CompanyStore;
}

@inject('store')
@observer
export default class EditCompanyForm extends React.Component<IEditCompanyFormProps> {
    componentWillUnmount() {
        const { store } = this.props;
        store!.resetEditCompany()
    }
    render() {
        const { store, location, match } = this.props;
        const { editCompanyState } = store!;
        const { key } = match.params;
        const qsValues = querystring.parse(location.search);
        const companyName = qsValues.CompanyName as string || "";
        const code = qsValues.Code as string || "" as string;
        const onSubmit = async (values: EditCompanyFormValues) => {
            const company: Company = toCompany(values);
            store!.editCompany(company);
        };
        if (editCompanyState === "done") {
            return (<Redirect to="/companies" />);
        }
        return (
            <Form
                onSubmit={onSubmit}
                initialValues={{ code: code, companyName: companyName, key: key }}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Edit company</h2>
                        <div>
                            <label>Company Name</label>
                            <Field
                                name="companyName"
                                component="input"
                                required
                            />
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
