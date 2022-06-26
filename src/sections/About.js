import React from "react"
const style = {
  header: {
    color: '#EFE9F4'
  },
  greeting: {
    color: '#FF8600'
  },
  p: {
    color: '#D1F9FF'
  },
  a: {
    color: '#FF8600',
    outline: 'none',
    '&:hover': {
      color: '#FF8600'
    },
    '&:focus': {
      color: '#FF8600'
    },
    '&:active': {
      color: '#FF8600'
    }
  }
}
const About = () => (
  <>
    <h2 style={style.header}>About Me</h2>
    <p style={style.p}>
      Welcome, my name is Giselle and I enjoy creating things on the web. 
      Web development fell at my lap, it wasn't a particular thing I wanted to do, it was just the project I was put on when I first got hired. 
      As time went on I realized how much I enjoyed building things that people would use. 
    </p>
    <p style={style.p}>
      I worked for a retail company, creating an easy to use self-checkout experience. 
      Currently, I am working at Bettercloud elevating the IT experience for others.
    </p>
    <p style={style.p}>
     Some technologies I have worked with:
    </p>
  </>
)

export default About