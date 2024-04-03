import Image from 'next/image'
import styles from './index.module.scss'
import { CONTACTS } from '@/types/types'
import VectorSvg from '../../svg/VectorSvg'
import { useResize } from '../../hooks/useResize'

interface Props {

}

export default function FooterDesktop(props: Props) {

  const { isPhoneWidth, isSmDesktopWidth, isLDesktopWidth, isVLDesktopWidth } = useResize()

  const getBg = () => {
    if (isSmDesktopWidth) {
      return '/img/footer-desktop-bg-1024.png'
    }
    else if (isLDesktopWidth) {
      return '/img/footer-desktop-bg-1440.png'
    }
    else if (isVLDesktopWidth) {
      return '/img/footer-desktop-bg-1920.png'
    }
    else {
      return ''
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.top} style={{ backgroundImage: `url(${getBg()})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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
