import styled from '@emotion/styled';

const FormS = styled.form`
  max-width: 400px;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  button:active {
    background-color: #3e8e41;
  }
`;

export default FormS;
