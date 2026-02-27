'use client'

import { Field, FieldLabel } from '@/app/_components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select'

export default function LocaleSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Language</FieldLabel>
      <Select value="en">
        <SelectTrigger className="w-45">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="other" disabled>
              More in progress...
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
