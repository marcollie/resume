import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin:  0 7rem 2rem 7rem;
`

const Item = styled.div`
  margin-bottom: 20px;
`
const Link = styled.a`
  color: black;
`
const H4 = styled.h4`
  display: inline;
`

const Work = () => {
  return (

      <Wrap>
        <Item>
          <Link href="https://marcollie.github.io/cryingnut/" target="_blank" rel="noopener noreferrer">
            <H4>Crying nut</H4>
          </Link>
          <p>&ensp;- 밴드 크라잉넛 음반 소개 페이지</p>
        </Item>
        <Item>
          <Link href="https://marcollie.github.io/artcenter/" target="_blank" rel="noopener noreferrer">
            <H4>성남 아트센터</H4>
          </Link>
          <p>&ensp;- 성남 아트센터 리뉴얼</p>
        </Item>
        <Item>
          <Link href="https://nervous-joliot-65aa61.netlify.com" target="_blank" rel="noopener noreferrer">
            <H4>Nflix-clone</H4>
          </Link>
          <p>&ensp;- 넷플릭스 클론</p>
        </Item>
      </Wrap>

  )
}

export default Work;