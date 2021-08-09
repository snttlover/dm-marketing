import Head from 'next/head'
import { NavMenu } from '../NavMenu'

export const MainLayout = ({ children, title }) => {
  
  return (
    <>
      <Head>
          <title>{title}</title>
      </Head>
      <NavMenu>{children}</NavMenu>
    </>
  )
}
