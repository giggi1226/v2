import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Github from "../images/svg/github.inline.svg";

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/projects/"}}
        sort: {frontmatter: {date: ASC}}
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              external
            }
            html
          }
        }
      }
    }
  `);

  console.log({data})

  const featuredProjects = data.projects.edges.filter(({ node }) => node);

  console.log({featuredProjects})

  return (
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{color: '#264653'}}>{'Featured Projects'}</h2>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          {featuredProjects &&
              featuredProjects.map(( {node}, i ) => {
                const { frontmatter, html } = node
                const { external, title, tech, github, cover, cta } = frontmatter
                const image = getImage(cover);
                return (
                    <div style={{display: 'flex', flexDirection: 'column', width: '33%'}} key={i}>
                      <h3>
                        <a href={external} target="_blank" rel="noreferrer" >{title}</a>
                      </h3>

                      <div
                          dangerouslySetInnerHTML={{ __html: html }}
                      />
                      <GatsbyImage style={{height: 320}} image={image} alt={title} />
                      {tech.length && (
                          <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around', padding: 0, alignItems: 'center'}}>
                              {github && (
                                  <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer" >
                                      <Github width={24} height={24}/>
                                  </a>
                              )}
                              {tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                          </ul>
                      )}
                    </div>

                )
              })}
        </div>
      </section>
  )}

export default Projects