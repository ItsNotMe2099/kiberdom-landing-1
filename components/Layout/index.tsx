import { ReactElement } from 'react'
import Footer from '../Footer'
import styles from './index.module.scss'
import { useResize } from '../hooks/useResize'
import Header from '../Header'

interface Props {
  children?: ReactElement | ReactElement[]
}

export default function Layout(props: Props) {

  const { isPhoneWidth } = useResize()

  return (
    <div className={styles.root}>
      {!isPhoneWidth && <Header />}
      <div className={styles.container}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
