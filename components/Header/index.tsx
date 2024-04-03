import Image from 'next/image'
import styles from './index.module.scss'
import LogoSvg from '../svg/LogoSvg'
import XSvg from '../svg/XSvg'
import Logo2Svg from '../svg/Logo2Svg'
import classNames from 'classnames'

interface Props {
  className?: string
}

export default function Header(props: Props) {

  return (
    <div className={classNames(styles.root, props.className)}>
      <Image className={styles.bg}
        src={'/img/header-desktop-bg.png'}
        alt='' fill />
      <div className={styles.content}>
        <LogoSvg className={styles.logo} />
        <XSvg />
        <Logo2Svg />
      </div>
    </div>
  )
}
