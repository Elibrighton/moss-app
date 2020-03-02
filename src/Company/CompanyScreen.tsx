import React from "react";
import { Breadcrumb, Table, Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import { CompanyStore } from './CompanyStore'
import { observer, inject } from 'mobx-react';

interface ICompanyProps {
    store?: CompanyStore;
}

@inject('store')
@observer
export default class CompanyScreen extends React.Component<ICompanyProps> {
    componentDidMount() {
        this.props.store!.getCompanyList();
    }

    render() {
        const columns = [
            {
                title: "Company Name",
                dataIndex: "CompanyName",
                key: "Id",
            }
        ];

        return (
            <>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Companies</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                    <Link to="/companies/add">
                        <Button type="primary" icon={<PlusOutlined />}>Add</Button>
                    </Link>
                    <Table columns={columns} loading={this.props.store!.companyListPromiseIsPending} dataSource={this.props.store!.companyList} />
                </div>
            </>
        )
    }
}