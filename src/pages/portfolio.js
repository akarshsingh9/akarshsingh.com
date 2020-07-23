import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { FaGithubAlt } from "react-icons/fa"

const Portfolio = () => (
<Layout className="portfolio-page">
  <SEO title="Portfolio" description = "All my projects and their source code hosted in GitHub"/>
  <h1>Portfolio</h1>
  <div className="grids col-1 sm-2 lg-3">
  
  <article className="post-card">
      <h3>akarshsingh.com website</h3>
      <p>Personal website developed using Gatsby JS, React, JavaScript, CSS. I am currently customizing stackrole's Foundation theme. Using the theme has helped 
        me get started quickly with Gatsby and learn how to design websites.
      </p>
      <br/>
      <div>        
        <Link to="https://github.com/akarshsingh9/akarshsingh.com">
        <span className="icon -left"><FaGithubAlt/></span> Source Code
        </Link>
      </div>      
  </article>

  <article className="post-card">
      <h3>Code in Python Android App</h3>
      <p>My first android app made using Java, XML, HTML, JS. I learnt complete development cycle of android app. Published it on Google Play Store.
      Its completely offline, has quiz, tutorials and glossary related to Python.</p>
      <br/>
      <div>        
        <Link to="https://github.com/akarshsingh9/CodeInPython">
        <span className="icon -left"><FaGithubAlt/></span> Source Code
        </Link>
      </div>      
  </article>
  
  <article className="post-card">
      <h3>Materialize Blog Website</h3>
      <p>My first website theme made using HTML, Materialize CSS, and JavaScript. This website has homepage, blog list section, blog page, disqus integration, author section,
         twitter and github follow buttons for author, share post on social media.</p>
      <br/>
      <div>        
        <Link to="https://github.com/akarshsingh9/Materialize-Blog-website">
        <span className="icon -left"><FaGithubAlt/></span> Source Code
        </Link>
      </div>      
  </article>
  
  <article className="post-card">
      <h3>Tour Itinerary Android App</h3>
      <p>Android app developed from scratch for Hindustan Petroleum Officers. I was in one month internship with HPCL as a Project Trainee. This application helps employees to
        plan their tour itinerary for any meetings, training, etc.
      </p>
      <br/>
      <div>        
        <Link to="https://github.com/akarshsingh9/TourItinerary">
        <span className="icon -left"><FaGithubAlt/></span> Source Code
        </Link>
      </div>      
  </article>

  <article className="post-card">
      <h3>Flight Search Android App</h3>
      <p>Android app developed from scratch for OneDirect Interview process. I have prepared this app in less than 24 hours. This app has Listing page for all available flights,
         a search option and basic booking screen.
      </p>
      <br/>
      <div>        
        <Link to="https://github.com/akarshsingh9/FlightSearch">
        <span className="icon -left"><FaGithubAlt/></span> Source Code
        </Link>
      </div>      
  </article>

  </div>
  <br/>
  </Layout>
)

export default Portfolio