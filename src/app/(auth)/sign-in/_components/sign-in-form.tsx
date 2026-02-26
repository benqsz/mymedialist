'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
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
    <form
      className="space-y-6 *:space-y-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required {...form.register('email')} />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          required
          {...form.register('password')}
        />
      </div>
      {form.formState.errors.root && (
        <p className="text-xs text-center text-destructive">
          {form.formState.errors.root.message}
        </p>
      )}
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  )
}
