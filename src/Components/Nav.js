import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';


const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  text-align: center;
  margin: 20px 0 20px 0;
`;

const SLink = styled(Link)`
   text-decoration: none;
  color: black;
  display: inline-block;
  text-align: center;
  margin-left: auto;
  margin-right: auto; 
  width: 13%;
  border-bottom: 3px solid 
    ${props => props.current ? "#bdc3c7" : "transparent"};
`;


export default withRouter(({ location: { pathname }}) => (
  <List>
      <SLink to="/" current={pathname === "/"}>About Me</SLink>
      <SLink to="/work" current={pathname === "/work"}>Work</SLink>
  </List>
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