import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container } from '../../pages/Register/style';
import logo from "../../assets/img/logo-orkut-simples.svg";


interface Props {
  handleComplete: () => void;
  handlePrev: () => void;
}

const Step2 = ({ handleComplete, handlePrev  }: Props) => {

  const initialFormData = {
    selfDescription: '',
    interests: '',
    statusRelashionship: '',
    childrens: '',
    smoke: '',
    drinks: '',
    songs: '',
    movies: '',
    profilePhoto: null,
  };

  const [formData, setFormData] = useState(initialFormData);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    setFormData(initialFormData);

    handleComplete();
  };

  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handlePrev();
  };



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
        name="SelfDescription"
        placeholder="Self Description"
        value={formData.selfDescription}
        onChange={handleChange}
      />
      <input
        type="text"
        name="interests"
        placeholder="Interests"
        value={formData.interests}
        onChange={handleChange}
      />
      <select
        name="statusRelacionamento"
        value={formData.statusRelashionship}
        onChange={handleChange}
      >
        <option value="">Relashionship status</option>
        {statusRelacionamentoOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="childrens"
        placeholder="Childrens"
        value={formData.childrens}
        onChange={handleChange}
      />
      <input
        type="text"
        name="smoke"
        placeholder="Smoking habits"
        value={formData.smoke}
        onChange={handleChange}
      />
      <input
        type="text"
        name="drinks"
        placeholder="Drinks habits"
        value={formData.drinks}
        onChange={handleChange}
      />
      <input
        type="text"
        name="songs"
        placeholder="Favorites songs"
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
          name="profilePhoto"
          placeholder="Profile Photo"
          onChange={handleChange}
          accept="image/*"
        />
      
      <button type="submit">Finalizar Login</button>
      <button className="btn-back" onClick={handleGoBack}>Voltar para o cadastro</button> 
      <button className="btn-back">Voltar para o Login</button> 

    </Container>
  );
};

export default Step2;
