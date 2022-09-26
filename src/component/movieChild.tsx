import React ,{ useEffect ,useState} from 'react'
export default function IndexPage() {
    useEffect(()=>{
        console.log('子组件加载')
    },[])
  return (
    <>
      这个是movie的子组件
    </>
  );
}
