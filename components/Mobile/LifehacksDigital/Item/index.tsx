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
        <div className={styles.rects}>
          <div className={styles.yellow} />
          <div className={styles.brown} />
        </div>
        <div className={styles.white}>
          {props.index}
        </div>
      </div>
      <div className={styles.desc}>{props.desc}</div>
    </div>
  )
}
