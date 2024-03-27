import { ReactElement } from 'react'
import Footer from '../Footer'
import styles from './index.module.scss'

interface Props {
  children?: ReactElement | ReactElement[]
}

export default function Layout(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
