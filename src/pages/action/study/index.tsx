import React ,{ useEffect ,useState,useRef} from 'react'
import { Table, Tag, Space ,Button,Input} from 'antd';
import useRequest from '@ahooksjs/use-request';
import {store} from '../../../../redux/store';
import {setCookie,getCookie} from '../../../component/cookie'
export default function IndexPage() {
  const tableRef = useRef(null);
  const { data, error, loading } = useRequest('/api/test');
  const [showValue,setShowValue] = useState('')
  const createAction = ()=>{
    console.log(tableRef);
    setShowValue(store.getState().value);
  }

  const columns = [
    {
      title: 'runoob_id',
      dataIndex: 'runoob_id',
      key: 'runoob_id',
    },
    {
      title: 'runoob_title',
      dataIndex: 'runoob_title',
      key: 'runoob_title',
    },
    {
      title: 'runoob_author',
      dataIndex: 'runoob_author',
      key: 'runoob_author',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>详情{record.name}</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table  columns={columns} dataSource={data?.data} loading={loading} />
      <Input ref = {tableRef}  type="text" placeholder='这里是action' value={showValue}/>
      <Button   type='primary' onClick={createAction}>点击这里</Button>
    </>
  );
}
