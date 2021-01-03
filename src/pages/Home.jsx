import React from 'react';
import { PageHeader } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

const Home = () => {
  const match = useRouteMatch();

  console.log('match', match);
  return (
    <>
      <PageHeader
        title="Home"
        subTitle="subtitle"
      />
      <div>
        <ul>
          <li><Link to="/profile">Github profile</Link></li>
          <li><Link to="/todo">TodoList using recoil</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Home;