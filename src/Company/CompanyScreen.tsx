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
        const { store } = this.props;
        store!.getCompanyList();
    }
    componentWillUnmount() {
        const { store } = this.props;
        store!.resetCompanyList()
    }
    render() {
        const columns = [
            {
                title: "Company Name",
                dataIndex: "CompanyName",
                key: "Id",
                render: (text: React.ReactNode, record: { Id: string; CompanyName: string; }) => <Link to={"/companies/edit/" + record.Id + "?CompanyName=" + record.CompanyName} >{text}</Link>,
            }
        ];
        const { store } = this.props;

        return (
            <>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Companies</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                    <Link to="/companies/add">
                        <Button type="primary" icon={<PlusOutlined />}>Add</Button>
                    </Link>
                    <Table columns={columns} loading={store!.companyListState === "pending"} dataSource={this.props.store!.companyList} />
                </div>
            </>
        )
    }
}