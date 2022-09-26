import React, { useEffect,useState } from 'react'
import { Input, Button } from 'antd';
import { movieAction } from '../../../../redux/action';
import { store } from '../../../../redux/store';
import ProCard from '@ant-design/pro-card';
export default function IndexPage() {
  return (
    <div>
      <Input type="text" placeholder='这里是action' onChange={(e) => {
        console.log(e.target.value);
        const action = movieAction(e.target.value)
        store.dispatch(action);
        let timer;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          timer = null;
          console.log(e.target.value);
        }, 2000)
      }} />
      <ProCard title="卡片组展开" ghost gutter={8} collapsible>
        <ProCard layout="center" bordered>
          卡片内容
        </ProCard>
        <ProCard layout="center" bordered>
          卡片内容
        </ProCard>
        <ProCard layout="center" bordered>
          卡片内容
        </ProCard>
      </ProCard>
    </div>
  );
}
