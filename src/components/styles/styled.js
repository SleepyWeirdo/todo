import styled from 'styled-components';

const gray = '#ddd';
const text = '#333';
const grayBg = '#f1f1f1';
const grayBgHover = '#f5f5f5';

export const Search = styled.input`
  border: 1px solid ${gray};
  border-radius: 4px;
  padding: 5px;
`;

export const List = styled.li`
  padding: 5px 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const BtnLinks = styled.a`
  background: ${grayBg};
  color: ${text};
  padding: 5px 10px;
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  border: 1px solid ${gray};
  cursor: pointer;
  text-decoration: none;

  :focus {
    outline: none;
  }

  :hover {
    background: ${grayBgHover};
  }
`;