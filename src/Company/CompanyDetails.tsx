import React from "react";
import { Breadcrumb, Spin } from "antd";
import { CompanyStore } from './CompanyStore'
import { observer, inject } from 'mobx-react';
import { RouteComponentProps } from "react-router-dom";
import './CompanyDetails.css';

interface RouteParams {
    key: string
}

interface ICompanyDetailsProps extends RouteComponentProps<RouteParams> {
    store?: CompanyStore;
}

@inject('store')
@observer
export default class CompanyDetails extends React.Component<ICompanyDetailsProps> {
    componentDidMount() {
        const { store, match } = this.props;
        const { key } = match.params;
        store!.getCompany(key);
    }
    componentWillUnmount() {
        const { store } = this.props;
        store!.resetGetCompany();
    }
    render() {
        const { store } = this.props;
        const { getCompanyState, companyDetails } = store!;
        return (
            <>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Companies</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                    {getCompanyState !== "done" ?
                        <div className="spinner">
                            <Spin />
                        </ div> :
                        <>
                            <h1>{companyDetails.CompanyName}</h1>
                            <h3>{companyDetails.Code}</h3>
                        </>
                    }
                </div>
            </>
        )
    }
}