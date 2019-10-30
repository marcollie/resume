import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0 20px 0;
`

const List = styled.ul`
  float: left;
  text-align: center;
  margin: auto;
  width: 300px;
`;

const Item = styled.li`
  display: inline-block;
  text-align: center;
  list-style: none;
  margin-right: 30px;
`

const SLink = styled(Link)`
  display: inline;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  border-bottom: 3px solid 
    ${props => props.current ? "#bdc3c7" : "transparent"};
`;


export default withRouter(({ location: { pathname } }) => (
  <Nav>
    <List>
      <Item>
        <SLink to="/" current={pathname === "/"}>About Me</SLink>
      </Item>
      <Item>
        <SLink to="/work" current={pathname === "/work"}>Work</SLink>
      </Item>
    </List>
  </Nav>
));

// const Nav = () => {
//   return (
//     <List>
//       <SLink to="/" className="menu-item">About Me</SLink>
//       <SLink to="/work" className="menu-item">Work</SLink>
//     </List>
//   );
// };

//export default Nav;