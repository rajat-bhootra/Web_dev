import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const { register, handleSubmit, watch, setError, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
    // if (data.username === "rajat") {
    //   setError("myform", { message: "you are banned" })
    // }
  }

  return (
    <>
      {isSubmitting && <div>Subimtting...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: { value: true, message: "this is required" }, minLength: { value: 3, message: "min len is 3" }, maxLength: { value: 10, message: "max len is 10" } })} placeholder='username' type="text" />
          {errors.username && errors.username.message}
          <br />
          <input {...register("password", { required: { value: true, message: "this is required" }, minLength: { value: 3, message: "min len is 3" }, maxLength: { value: 10, message: "max len is 10" } })} placeholder='password' type="password" />
          {errors.password && errors.password.message}
          <br />
          <input disabled={isSubmitting} type="submit" />
          {errors.myform && errors.myform.message}
        </form>
      </div>
    </>
  )
}

export default App
