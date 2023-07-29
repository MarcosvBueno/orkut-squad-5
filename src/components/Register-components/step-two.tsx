import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container } from '../../pages/Register/style';
import logo from "../../assets/img/logo-orkut-simples.svg";
import {useNavigate} from "react-router-dom";


interface Props {
  handleComplete: () => void;
  handlePrev: () => void;
  registrationCompleted: boolean;
}


const Step2 = ({ handleComplete, handlePrev,  registrationCompleted  }: Props) => {
  const navigate = useNavigate();
  const initialFormData = {
    selfDescription: '',
    interests: '',
    statusRelationship: '',
    childrens: '',
    smoke: '',
    drinks: '',
    songs: '',
    movies: '',
    profilePhoto: null,
  };

  const [formData, setFormData] = useState(initialFormData);
 
 // This function is called whenever a change occurs in any input field or select element of the form. It updates the formData state based on user input. 
 //If the input element is of type file, it handles the selected file accordingly.
 // The function takes an event object (e) as a parameter and extracts the name, value and type properties of the target element (input field or select element).

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      const selectedFile = fileInput?.files?.[0];
      setFormData({
        ...formData,
        [name]: selectedFile || null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

 // If the form data passes validation, it resets the formData state to its initial values ​​(initialFormData) and calls the handleComplete function passed as prop, which advances to the next step of the registration process.

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    setFormData(initialFormData);
   
    handleComplete();
  };

  // This function is called when the user clicks on the "Back to registration" button. It prevents the button's default behavior using e.preventDefault() and calls the handlePrev function passed as a prop, which navigates the user to the previous step in the registration process.

  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handlePrev();
  };

  //This function is called when registration is complete (registrationCompleted is true). It calls the handleComplete function passed in as a prop, indicating that the registration process is complete, and then navigates the user back to the login page using the navigate function from the react-router-dom package.

  const handleLogin = () => {
    handleComplete();
    console.log('Navigating back to the login page.');
    navigate('/')
  };

 //This is an array containing different relationship status options such as "single", "married", "widowed", "divorced". It is used to populate the select element with these options.
 
  const statusRelacionamentoOptions = [
    'solteiro(a)',
    'casado(a)',
    'viúvo(a)',
    'divorciado(a)',
  ];

  return (
    <Container onSubmit={handleSubmit}>
      <img src={logo} alt="Logo"/>
      <h2>Acesse o orkut</h2>
      <input
        type="text"
        name="selfDescription"
        placeholder="Quem sou eu?"
        value={formData.selfDescription}
        onChange={handleChange}
      />
      <input
        type="text"
        name="interests"
        placeholder="Interesses no Orkut"
        value={formData.interests}
        onChange={handleChange}
      />
      <select
  name="statusRelacionamento"
  value={formData.statusRelationship} 
  onChange={handleChange}
>
  <option value="">Status de  Relacionamento</option>
  {statusRelacionamentoOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>


      <input
        type="text"
        name="childrens"
        placeholder="Filhos"
        value={formData.childrens}
        onChange={handleChange}
      />
      <input
        type="text"
        name="smoke"
        placeholder="Hábitos de fumo"
        value={formData.smoke}
        onChange={handleChange}
      />
      <input
        type="text"
        name="drinks"
        placeholder="Hábitos de beber"
        value={formData.drinks}
        onChange={handleChange}
      />
      <input
        type="text"
        name="songs"
        placeholder="Músicas favoritas"
        value={formData.songs}
        onChange={handleChange}
      />
      <input
        type="text"
        name="Favorites movies"
        placeholder="Filmes Favoritos"
        value={formData.movies}
        onChange={handleChange}
      />

    
      <input
        type="file"
        id="profilePhoto"
        name="profilePhoto"
        accept="image/*"
        onChange={handleChange}
      />
        <label htmlFor="profilePhoto">Upload Foto de perfil</label>


    {registrationCompleted ? (
        <>
          <p>Cadastro finalizado</p>
          <button onClick={handleLogin}>Voltar para o login</button>
        </>
      ) : (
        <>
          <button type="submit">Finalizar Login</button>
          <button className="btn-back" onClick={handleGoBack}>
            Voltar para o cadastro
          </button>
        </>
      )}
      
     
    </Container>
  );
};

export default Step2;
