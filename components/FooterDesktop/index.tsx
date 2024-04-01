import Image from 'next/image'
import styles from './index.module.scss'
import { CONTACTS } from '@/types/types'
import VectorSvg from '../svg/VectorSvg'

interface Props {

}

export default function FooterDesktop(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.house}>
          <Image src={'/img/house.png'} alt='' fill />
        </div>
        <VectorSvg className={styles.vector} />
        <div className={styles.contacts}>
          <div>АО «Кибердом»</div>
          <div className={styles.address}>{CONTACTS.address}</div>
          <div>Телефоны:<br />{CONTACTS.phone} (служба заботы)</div>
          <div>{CONTACTS.website}</div>
        </div>
      </div>
      <Image className={styles.bg2} src={'/img/footer-desktop-bg2.png'} alt='' fill />
    </div>
  )
}
