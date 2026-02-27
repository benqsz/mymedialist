import Header from '@/app/_components/header'

export default function HeaderLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
