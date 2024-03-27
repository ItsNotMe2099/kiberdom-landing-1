import Top from '@/components/Top'
import styles from './index.module.scss'
import WhatToDo from '@/components/WhatToDo'
import LifehacksDigital from '@/components/LifehacksDigital'
import LifehacksReal from '@/components/LifehacksReal'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

export default function IndexPage() {

  return (
    <Layout>
      <Top />
      <WhatToDo />
      <LifehacksDigital />
      <LifehacksReal />
    </Layout>
  )
}
