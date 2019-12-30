import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Companies from "../components/Companies";
import Filter from "../filter/Index";

const IndexPage = () => {
  return <Layout>
    <SEO title="Home" />
    <main className="max-w-full sm:max-w-2xl mx-auto mt-5 md:max-w-4xl lg:max-w-sl">
      <div className="my-8">
        <Filter />
      </div>
      <Companies />
    </main>
  </Layout>
}

export default IndexPage
