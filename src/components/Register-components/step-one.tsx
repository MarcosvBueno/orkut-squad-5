import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container } from '../../pages/Register/style';
import logo from "../../assets/img/logo-orkut-simples.svg";


interface Props {
  handleNext: () => void;
}

const Step1 = ({ handleNext }: Props) => {
  const initialFormData = {
    name: '',
    email: '',
    date: '',
    city: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted successfully.');


    
    setFormData(initialFormData);
    handleNext();
  };

  return (
    <Container  onSubmit={handleSubmit}>
   <img src={logo} alt="Logo"/>
      <h2>Acesse o orkut</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        placeholder="Date of birth"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Criar conta</button>

    </Container>
  );
};

export default Step1;
