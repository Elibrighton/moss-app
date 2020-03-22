import React from "react";
import { Breadcrumb, Table, Button, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
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
        store!.resetCompanyList();
    }
    handleConfirm(key: string) {
        const { store } = this.props;
        store!.deleteCompany(key);
    }
    render() {
        const { store } = this.props;
        const { companyList, companyListState, deleteCompanyState } = store!;
        if (deleteCompanyState === "done") {
            message.success("Company deleted");
            store!.resetCompanyList();
        }
        const columns = [
            {
                title: "Company name",
                dataIndex: "CompanyName",
                key: "key",
                render: (text: React.ReactNode, record: { key: string; }) => <Link to={"/companies/" + record.key} >{text}</Link>
            },
            {
                title: "Code",
                dataIndex: "Code",
                key: "Code"
            },
            {
                title: 'Action',
                key: 'action',
                render: (record: { key: string; CompanyName: string; Code: string }) => (
                    <>
                        <Link to={"/companies/edit/" + record.key + "?CompanyName=" + record.CompanyName + "&Code=" + record.Code}><EditOutlined /></Link>
                        <Popconfirm
                            title="Are you sure you want to delete this company?"
                            onConfirm={() => {
                                this.handleConfirm(record.key);
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href={"/companies/delete/" + record.key}><DeleteOutlined /></a>
                        </Popconfirm>
                    </>
                ),
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
                    <Table columns={columns} loading={companyListState === "pending"} dataSource={companyList} />
                </div>
            </>
        )
    }
}