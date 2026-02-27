'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/app/_components/ui/button'
import { Field, FieldError, FieldLabel } from '@/app/_components/ui/field'
import { Input } from '@/app/_components/ui/input'
import { signInSchema } from '@/app/(auth)/_constants'
import signInAction from '@/app/(auth)/sign-in/_actions/sign-in'

export default function SignInForm() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const { success, message } = await signInAction(data)
    if (success) {
      redirect('/')
    }
    form.setError('root', { message })
  }

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type="email"
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type="password"
              autoComplete="current-password"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      {form.formState.errors.root && (
        <p className="text-xs text-center text-destructive">
          {form.formState.errors.root.message}
        </p>
      )}
      <Button
        type="submit"
        className="w-full"
        isLoading={form.formState.isSubmitting}
      >
        Login
      </Button>
    </form>
  )
}
