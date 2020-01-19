import styled from 'styled-components';

export const List = styled.li`
  padding: 5px 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const BtnLinks = styled.a`
  background: #f1f1f1;
  color: #333;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  border: 1px solid #ddd;
  cursor: pointer;
  text-decoration: none;

  :focus {
    outline: none;
  }

  :hover {
    background: #f5f5f5;
  }
`;