'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
import { signUpSchema } from '@/app/(auth)/_constants'
import signUpAction from '@/app/(auth)/sign-up/_actions/sign-up'

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      rePassword: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    const { success, message } = await signUpAction(data)
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
        <Label htmlFor="username">Username</Label>
        <Input id="username" required {...form.register('username')} />
      </div>
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
      <div>
        <Label htmlFor="rePassword">Confirm Password</Label>
        <Input
          id="rePassword"
          type="password"
          required
          {...form.register('rePassword')}
        />
      </div>
      {form.formState.errors.root && (
        <p className="text-xs text-center text-destructive">
          {form.formState.errors.root.message}
        </p>
      )}
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  )
}
