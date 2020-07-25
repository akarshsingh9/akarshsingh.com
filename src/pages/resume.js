import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => {
  const resumePDF = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume_Akarsh" }) {
        name
        extension
        publicURL
      }
    }
  `)
  return (
    <Layout className="resume-page">
        <SEO title="Akarsh's Resume" description="Resume page on my personal website akarshsingh.com. PDF embeded."/>
        <div >
         <h1>Resume</h1>
         <embed src={resumePDF.pdf.publicURL} type="application/pdf" width="100%" height="600px" />
        </div>
    </Layout>    
  )
}