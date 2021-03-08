import React from 'react'
import styled from 'styled-components'
import '../App.css'

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
`
const Nav = styled.nav`
    background: #603bbb;
    width: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const H2 = styled.h2`
    color: #fff;
`
const Button = styled.button`
  width: 86px;
  padding: 8px 0;
  background: #3a2b58;
`

const Hero = ({handleLogout}) => {
    return(
        <Section>
            <Nav>
                <H2>Welcome</H2>
                <Button onClick = {handleLogout}>Logout</Button>
            </Nav>
        </Section>
    )
}

export default Hero