import Image from 'next/image'
import styles from './index.module.scss'
import HearSmSvg from '../svg/HearSmSvg'
import FooterLogoSvg from '../svg/FooterLogoSvg'

interface Props {

}

export default function Footer(props: Props) {

  return (
    <div className={styles.root}>
      <Image className={styles.bg} src={'/img/bg4.png'} alt='' fill />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <HearSmSvg />
          <FooterLogoSvg />
        </div>
      </div>
    </div>
  )
}
