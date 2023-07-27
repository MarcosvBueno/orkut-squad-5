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
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    for (const field in formData) {
      if (formData[field as keyof typeof formData].trim() === '') {
        errors[field] = 'This field is required';
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Form validation failed.');
      return;
    }

    console.log('Form submitted successfully.');
    setFormData(initialFormData);
    handleNext();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <img src={logo} alt="Logo" />
      <h2>Acesse o orkut</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {formErrors.name && <span>{formErrors.name}</span>}
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <span>{formErrors.email}</span>}
      <input
        type="date"
        name="date"
        placeholder="Date of birth"
        value={formData.date}
        onChange={handleChange}
      />
      {formErrors.date && <span>{formErrors.date}</span>}
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      {formErrors.city && <span>{formErrors.city}</span>}
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />
      {formErrors.state && <span>{formErrors.state}</span>}
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />
      {formErrors.country && <span>{formErrors.country}</span>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {formErrors.password && <span>{formErrors.password}</span>}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
      <button type="submit">Criar conta</button>
    </Container>
  );
};

export default Step1;

