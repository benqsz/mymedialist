import Container from '@/app/_components/ui/container'
import { Typography } from '@/app/_components/ui/typography'
import LocaleSelect from '@/app/(header)/settings/_components/locale-select'
import ThemeSelect from '@/app/(header)/settings/_components/theme-select'
import { sessionCheck } from '@/auth/utils'

export default async function SettingsPage() {
  await sessionCheck()

  return (
    <Container as="main">
      <Typography as="h1" className="mb-10">
        Profile settings
      </Typography>
      <div className="space-y-5">
        <ThemeSelect />
        <LocaleSelect />
      </div>
    </Container>
  )
}
