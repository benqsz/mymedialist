'use client'

import { Input } from '@frontend/_components/ui/input'
import { Label } from '@frontend/_components/ui/label'
import { signUpSchema } from '@frontend/(auth)/_constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      rePassword: '',
    },
  })

  function onSubmit(data: z.infer<typeof signUpSchema>) {
    console.log(data)
  }

  return (
    <form
      className="space-y-6 *:space-y-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <div>
        <Label htmlFor="re_password">Confirm Password</Label>
        <Input id="re_password" type="password" required />
      </div>
    </form>
  )
}
