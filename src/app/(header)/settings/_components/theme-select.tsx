'use client'

import { useTheme } from 'next-themes'

import { Field, FieldLabel } from '@/app/_components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select'

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme()

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Aplication theme</FieldLabel>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-45">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
