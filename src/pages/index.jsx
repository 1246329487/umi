import React from 'react'
import {setCookie,getCookie} from '../component/cookie'
export default (props) => {
    setCookie('user','123',1)
    const a = getCookie('user')
    return (
        <>
            首页
            <div style={{ height: '100%' }}>{props.children}</div>
        </>
    )
}