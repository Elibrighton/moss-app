import React from "react";
import { Breadcrumb, Table, Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';

interface ICompanyProps {
}

export default class CompanyScreen extends React.Component {
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
                    <Table columns={columns} />
                </div>
            </>
        )
    }
}