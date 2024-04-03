import Top from '@/components/Top'
//import styles from './index.module.scss'
import WhatToDo from '@/components/WhatToDo'
import Layout from '@/components/Layout'
import { useResize } from '@/components/hooks/useResize'
import Header from '@/components/Desktop/Header'
import LifehacksDigital from '@/components/Mobile/LifehacksDigital'
import LifehacksReal from '@/components/Mobile/LifehacksReal'

export default function IndexPage() {

  const { isPhoneWidth } = useResize()

  return (
    <Layout>
      <>{!isPhoneWidth && <Header />}</>
      <Top />
      <>{isPhoneWidth && <WhatToDo />}</>
      <>{isPhoneWidth && <LifehacksDigital />}</>
      <>{isPhoneWidth && <LifehacksReal />}</>
    </Layout>
  )
}
