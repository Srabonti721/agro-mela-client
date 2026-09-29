import AboutPreview from './AboutPreview'
import ProductsPreview from './ProductsPreview'
import ServicePreview from './Servicespreview/ServicePreview'
import WhatWeHave from './WhatWeHave/WhatWeHave'

const Home = () => {
  return (
    <div>
      <AboutPreview/>
      <WhatWeHave/>
      <ProductsPreview/>
      <ServicePreview/>
    </div>
  )
}

export default Home
