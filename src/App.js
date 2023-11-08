import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  country: yup.string().required(),
  gender: yup.string().required(),
});

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => alert('Form was submitted: ' + JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Username" type='text' />
      {errors.name && <p>This field is required</p>}
      
      <input {...register("email")} placeholder="Email" type='text'/>
      {errors.email && <p>This field is required and should be a valid email</p>}
      
      <input {...register("password")} placeholder="Password" type="password" />
      {errors.password && <p>This field is required and should be at least 8 characters long</p>}
      

      <select {...register("country")}>
        <option value="" disabled>Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
      </select>
      {errors.country && <p>This field is required</p>}
      <br></br>
      <br></br>
      <input type="radio" value="Male" {...register("gender")} /> Male
      <input type="radio" value="Female" {...register("gender")} /> Female
      {errors.gender && <p>This field is required</p>}
      
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
