import React from 'react';
import './App.css';
import { Layout, Menu } from "antd";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import CompanyScreen from './Company/CompanyScreen';

const { Header, Footer, Content } = Layout;
const year: number = new Date().getFullYear();

function App() {
  return (
    <Router>
      <Layout className="layout" >
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/companies">Companies</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/companies" exact component={CompanyScreen} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Moss ©{year} Created by JET Brighton PTY LTD</Footer>
      </Layout>
    </Router>
  );
}

export default App;
