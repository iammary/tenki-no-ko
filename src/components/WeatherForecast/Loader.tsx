import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader: React.FC = (props) => (
  <ContentLoader speed={2} viewBox="0 0 250 160" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
    <circle cx="125" cy="30" r="30" />
    <rect x="0" y="80" rx="8" ry="8" width="250" height="15" />
    <rect x="35" y="105" rx="8" ry="8" width="180" height="15" />
    <rect x="60" y="140" rx="8" ry="8" width="130" height="15" />
  </ContentLoader>
)

export default Loader
