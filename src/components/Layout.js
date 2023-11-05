import React from 'react'
import "../styles/global.css"

const Layout = ({children}) => (
  <div style={{width: '100%', height: '100%'}}>
    {children}
  </div>
)

export default Layout