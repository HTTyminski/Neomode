import React, { useState } from "react";
import { connect } from "react-redux";
import pikachu from '../../assets/images.png'
import styled from "styled-components";

import { searchPokemon, getData } from "../../actions/index";

const StyledForm = styled.form`
  position: relative;
  justify-content: space-between;

  div {
    display: flex;
  }
  input{
    min-width: 237px;
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  button {
    height: 38px;
    margin-left: 4px;
  }
`;

function mapDispatchToProps(dispatch:Function) {
  return {
    searchPokemon: (name:string) => dispatch(searchPokemon(name)),
    getData: () => dispatch(getData())
  };
}

interface connectedFormInterface {
  searchPokemon: Function;
  getData: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ConnectedForm: React.FC<connectedFormInterface> = ({ searchPokemon, getData }) => {
  const [value, setValue] = useState("");

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchPokemon(value);
    setValue("");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            id="name"
            value={value}
            onChange={handleChange}
            required
            placeholder="Busque seu Pokemon"
          />
        <button type="submit" className="btn btn-success btn-md">
          Buscar
        </button>
        </div>
       
      </StyledForm>
      {/* <StyledDataButton className="btn btn-info float-right" onClick={getData}>
        Get Data
      </StyledDataButton> */}
    </>
  );
};

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
