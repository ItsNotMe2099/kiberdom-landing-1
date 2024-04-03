import Top from '@/components/Top'
//import styles from './index.module.scss'
import WhatToDo from '@/components/WhatToDo'
import LifehacksDigital from '@/components/LifehacksDigital'
import LifehacksReal from '@/components/LifehacksReal'
import Layout from '@/components/Layout'
import { useResize } from '@/components/hooks/useResize'
import Header from '@/components/Header'

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
