import { ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
  index: number
  desc: ReactElement
}

export default function Item(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.number}>
        {props.index}
      </div>
      <div className={styles.desc}>{props.desc}</div>
    </div>
  )
}
