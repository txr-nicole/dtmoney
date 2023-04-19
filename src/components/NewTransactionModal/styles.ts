import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--titulos-gray7);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 400;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: var(--background-gray1);
    font-weight: 400;
    font-size: 1rem;
    border: 0;
    color: var(--textoBase-gray6);
    outline:none ;

    &::placeholder {
      color: var(--placeholder-gray5);
    }
    &:focus {
      border:2px solid var(--green-light)
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--branco-white1);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
