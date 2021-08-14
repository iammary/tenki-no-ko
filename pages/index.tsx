import React from 'react'
import Home from '@layouts/Home'
import SEO from '@components/SEO'

const HomePage: React.FC = () => {
  return (
    <>
      <SEO title="Weather forecast" description="A 3-day weather forecasting app" />
      <Home />
    </>
  )
}
export default HomePage
