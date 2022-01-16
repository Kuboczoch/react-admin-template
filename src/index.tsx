import React from 'react'
import ReactDOM from 'react-dom'
import { Admin } from 'react-admin'
import dataProvider from './dataProvider'

ReactDOM.render(
  <React.StrictMode>
    <Admin dataProvider={dataProvider}></Admin>
  </React.StrictMode>,
  document.getElementById('root'),
)
