"use client";
import { AccountForm } from '@/components/ui/account-form';
import { AddressForm } from '@/components/ui/address-form';
import { UserForm } from '@/components/ui/user-form';
import { useMultistepForm } from '@/hooks/use-multistep-form';
import React, { FormEvent, useState } from 'react'
type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}
const CarPage = () => {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm key={data.firstName} {...data} updateFields={updateFields} />,
      <AddressForm key={data.lastName} {...data} updateFields={updateFields} />,
      <AccountForm key={data.email} {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    console.log(data)
    alert("Successful Account Creation")
    
  }

  return (
    <div className='h-[65vh] w-[100vw] flex items-center justify-center'>
    <div
      className=' bg-secondary border border-black p-8 m-4 rounded-md font-sans max-w-max'
    >
      <form onSubmit={onSubmit}>
        <div className='relative bottom-1'>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CarPage