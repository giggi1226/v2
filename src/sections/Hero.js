import React from "react"
const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
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
const Hero = () => (
  <div style={style.container}>
    <p style={style.greeting}>Hi, my name is</p>
    <h1 style={style.header}>Giselle Pacheco</h1>
    <p style={style.p}>I'm a software engineer specializing in... . Currently, I'm focused on building... at{' '}<a style={style.a} href="https://www.bettercloud.com/" target="_blank" rel="noreferrer">BetterCloud</a>.</p>
  </div>
)

export default Hero