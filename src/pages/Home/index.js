import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import News from '../News';
import HouseList from '../HouseList';
import Index from '../Index';
import Profile from '../Profile';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

function Home(props) {
  const navigate = useNavigate();
  const location = useLocation();

  let initTab = 'index';

  if (location.pathname !== '/home') {
    initTab = location.pathname.split('/').slice(-1)[0];
  }

  const tabs = [
    {
      key: 'index',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'list',
      title: '找房',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'news',
      title: '资讯',
      icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    },
    {
      key: 'profile',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="news" element={<News />} />
          <Route path="list" element={<HouseList />} />
          <Route exact path="" element={<Index />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>

      <div style={{ flex: 0, borderTop: 'solid 1px var(--adm-border-color)' }}>
        <TabBar
          onChange={(value) => navigate(value === 'index' ? '' : value)}
          activeKey={initTab}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}

export default Home;
