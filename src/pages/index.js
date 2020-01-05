import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import LeftMainSection from "../MainPage/LeftSection";
import RightMainSection from "../MainPage/RightSection";

const IndexPage = () => {
  return <Layout>
    <SEO 
      title="Congty Tech" 
      description="company review"
      lang="vn"
      
    />
    <main className="px-4 lg:p-0 max-w-5xl mx-auto flex flex-col lg:flex-row mt-12">
      <div className="lg:w-8/12 order-2 lg:order-1 w-full">
          <LeftMainSection />
      </div>
      <div className="lg:w-4/12 ml-0 lg:ml-8 order-1 lg:order-2 w-full">
          <RightMainSection />
      </div>
    </main>
  </Layout>
}

export default IndexPage
