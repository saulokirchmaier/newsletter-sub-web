'use client'

import ReactDOM from 'react-dom'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import logo from '@/img/logo.png'
import woman from '@/img/woman.png'
import CustomInput from '@/components/CustomInput'
import MaskInput from '@/components/MaskInput'
import CustomButton from '@/components/CustomButton'

interface IFormInput {
  name: string
  email: string
  phone: string
  company: string
}

const schema = yup
  .object({
    name: yup.string().required('Nome não pode estar vazio'),
    email: yup.string().email().required('Email não pode estar vazio'),
    phone: yup
      .string()
      .required('Telefone não pode estar vazio')
      .matches(
        /\(\d{2}\) \d \d{4}-\d{4}/,
        'Informe um telefone valido com DDD'
      ),
    company: yup.string().required('Empresa não pode estar vazio'),
  })
  .required()

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <main className="h-screen w-full p-4 md:py-14 md:px-32">
      <Image src={logo} alt="logo" width={120} />
      <div className="flex flex-col gap-4 justify-center h-full md:max-w-[900px]">
        <h1 className="text-4xl font-bold text-white mb-8">
          Inscreva-se em nossa newsletter.
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between gap-4 flex-wrap w-full md:max-w-[750px] "
        >
          <CustomInput
            label="Nome Completo"
            name="name"
            placeholder="Insira seu nome completo"
            register={register}
            error={errors.name?.message}
          />
          <CustomInput
            label="E-mail"
            name="email"
            placeholder="Insira seu email"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <MaskInput
            label="Telefone"
            name="phone"
            placeholder="(DD) 9 0000-0000"
            mask="(99) 9 9999-9999"
            register={register}
            error={errors.phone?.message}
          />
          <CustomInput
            label="Empresa"
            name="company"
            placeholder="Insira a empresa"
            register={register}
            error={errors.company?.message}
          />
        </form>
        <div className="mt-8">
          <CustomButton
            text="Realizar inscrição"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
      <Image
        src={woman}
        alt="woman"
        className="hidden lg:block lg:w-4/12 absolute md:bottom-0 md:right-0 "
      />
    </main>
  )
}
