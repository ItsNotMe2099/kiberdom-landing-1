import Top from '@/components/Top'
//import styles from './index.module.scss'
import WhatToDo from '@/components/Mobile/WhatToDo'
import Layout from '@/components/Layout'
import { useResize } from '@/components/hooks/useResize'
import Header from '@/components/Desktop/Header'
import LifehacksDigital from '@/components/Mobile/LifehacksDigital'
import LifehacksReal from '@/components/Mobile/LifehacksReal'
import LampBlock from '@/components/Desktop/LampBlock'

export default function IndexPage() {

  const { isPhoneWidth } = useResize()

  return (
    <Layout>
      <>{!isPhoneWidth && <Header />}</>
      <Top />
      <>{!isPhoneWidth && <LampBlock />}</>
      <>{isPhoneWidth && <WhatToDo />}</>
      <>{isPhoneWidth && <LifehacksDigital />}</>
      <>{isPhoneWidth && <LifehacksReal />}</>
    </Layout>
  )
}
