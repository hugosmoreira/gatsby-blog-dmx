import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
const NewsLetter = () => {
  return (
    <Layout>
      <SEO title="CodeSec Blog | Newsletter" />
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I write to my friends every few weeks</h4>
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control "
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email"
            />
            <button type="submit" className="btn form-control submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter