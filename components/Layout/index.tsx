import { ReactElement } from 'react'
import styles from './index.module.scss'
import { useResize } from '../hooks/useResize'
import FooterDesktop from '../Desktop/FooterDesktop'
import Footer from '../Mobile/Footer'

interface Props {
  children?: ReactElement | ReactElement[]
}

export default function Layout(props: Props) {

  const { isPhoneWidth } = useResize()

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {props.children}
      </div>
      {isPhoneWidth ? <Footer /> : <FooterDesktop />}
    </div>
  )
}
