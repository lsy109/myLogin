// /src/pages/DashboardPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
const DashboardPage: React.FC = () => {
  const location = useLocation();
  const { userData } = location.state || {}; // 解构出 userdata
  return (
    <div className='myDashboard'>

      <h1>欢迎来到仪表盘</h1>

      <p>这是登录后的仪表盘页面。</p>
      <p>Username:{userData?.username}</p>
      <p>email:{userData?.email}</p>
    </div>
  );
};

export default DashboardPage;
