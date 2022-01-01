import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, Grid } from 'antd-mobile';
import axios from 'axios';
import Nav1 from '../../assets/images/nav-1.png';
import Nav2 from '../../assets/images/nav-2.png';
import Nav3 from '../../assets/images/nav-3.png';
import Nav4 from '../../assets/images/nav-4.png';
import './index.scss';

function Index(props) {
  const [swipers, setSwipers] = useState([]);
  const navs = [
    { id: 1, title: '整租', img: Nav1, path: '/home/list' },
    { id: 2, title: '合租', img: Nav2, path: '/home/list' },
    { id: 3, title: '地图找房', img: Nav3, path: '/map' },
    { id: 4, title: '去出租', img: Nav4, path: '/home/list' },
  ];
  // const [navs, setNavs] = useState([
  //   { id: 1, title: '整租', img: Nav1, path: '/home/list' },
  //   { id: 2, title: '合租', img: Nav2, path: '/home/list' },
  //   { id: 3, title: '地图找房', img: Nav3, path: '/map' },
  //   { id: 4, title: '去出租', img: Nav4, path: '/home/list' },
  // ]);
  const navigate = useNavigate();

  const getSwipers = async () => {
    const res = await axios.get('http://localhost:8080/home/swiper');
    setSwipers(res.data.body);
  };

  useEffect(() => {
    getSwipers();
  }, []);

  const renderSwipers = () => {
    return swipers.map((data, index) => (
      <Swiper.Item key={index}>
        <img
          alt={data.alt}
          src={`http://localhost:8080${data.imgSrc}`}
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </Swiper.Item>
    ));
  };

  const renderNavs = () => {
    return navs.map((item) => (
      <Grid.Item key={item.id} onClick={() => navigate(item.path)}>
        <img alt="" src={item.img} />
        <h2>{item.title}</h2>
      </Grid.Item>
    ));
  };

  return (
    <div>
      <div className="swiper">
        <Swiper autoplay loop>
          {renderSwipers()}
        </Swiper>
      </div>

      <Grid columns={4} className="nav">
        {renderNavs()}
      </Grid>
    </div>
  );
}

export default Index;
