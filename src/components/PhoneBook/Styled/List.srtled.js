import styled from '@emotion/styled';

const List = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  button {
    border: none;
    background: white;
    cursor: pointer;
    margin-left: 10px;
  }
  button:hover {
    color: red;
  }
`;

export default List;
