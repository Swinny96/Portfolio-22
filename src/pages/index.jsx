import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About/About"
import Experince from "../components/Experince/Experince"
// import Services from "../components/Services/Services"
// import Portfolio from "../components/Portfolio/Portfolio"
import ProjectSection from "../components/Portfolio/ProjectSection"
// import Testimonials from "../components/Testimonials/Testimonials"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Experince />
    {/* <Services /> */}
    {/* <Portfolio /> */}
    <ProjectSection />
    {/* <Testimonials /> */}
    <Contact />
  </Layout>
)

export default IndexPage
