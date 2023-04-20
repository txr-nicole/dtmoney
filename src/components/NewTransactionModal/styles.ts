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
    outline: none;

    &::placeholder {
      color: var(--placeholder-gray5);
    }
    &:focus {
      border: 2px solid var(--green-light);
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#015F43",
  red: "#AA2834",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  background: var(--shapeSecundaria-gray3);
  border-radius: 0.25rem;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ isActive, activeColor }) =>
    isActive ? colors[activeColor] : ""};

  img {
    filter: ${({ isActive }) =>
      isActive
        ? "invert(89%) sepia(100%) saturate(0%) hue-rotate(355deg) brightness(107%) contrast(100%)"
        : ""};
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--textoBase-gray6);
  }
`;
