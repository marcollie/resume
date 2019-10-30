import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div`
  margin:  0 7rem 2rem 7rem;
`

const Skill = styled.div`
  display:inline;
`
const H4 = styled.h4`
  cursor: pointer;
  display:inline;
`


function mouseClick () {
  const skId = document.getElementById("skills");
  const barId = document.getElementById("sBar")
  if(skId.style.display === "none") {
    skId.style.display = "inline";
    barId.innerHTML = " > "
  } else {
    skId.style.display = "none";
    barId.innerHTML = " < "
  }
}

const AboutMe = () => {
  return (

      <Wrap>
        <p>
        이유상<br />
        1989. 12. 12<br />
        <br />
        서현고등학교 졸업 (2008.02)<br />
        선문대학교 스페인중남미어학과 졸업 (2019.02)<br />
        <br />
        이젠아카데미컴퓨터학원<br /> 
        - 스마트미디어응용 디자인콘텐츠 개발과정 수료 (2018.11)
        </p>
        <br />
        <Skill>
          <H4 onClick={mouseClick}>Skills
            <h4 id="sBar" style={{display:"inline"}}> &lt; </h4>
          </H4>
          <p id="skills" style={{display:"none"}}>
            HTML5&ensp;  CSS&ensp;  JavaScript&ensp;  React&ensp; PhotoShop&ensp;  Illustrator  
          </p>
        </Skill>
      </Wrap>
  )
}

export default AboutMe;