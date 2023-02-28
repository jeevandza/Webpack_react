import React from 'react'
import './global.scss'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { CommonRoutes } from '@Routes'
import { TestRoutes } from '@Views'

export default function App() {
  return (
    <>
      {/* <Routes>
        {CommonRoutes.map((route) => (
          <Route key={route.name} path="common" element={<route.Component />} />
        ))}
      </Routes> */}
      <TestRoutes />
    </>
  )
}
