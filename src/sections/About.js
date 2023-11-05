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
    </>
)

export default About