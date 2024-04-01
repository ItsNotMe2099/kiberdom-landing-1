import styles from './index.module.scss'
import HearSvg from '../svg/HearSvg'
import LogoSvg from '../svg/LogoSvg'
import classNames from 'classnames'
import { useResize } from '../hooks/useResize'
import Image from 'next/image'

interface Props {
  className?: string
}

export default function Top(props: Props) {

  const { isPhoneWidth } = useResize()

  return (
    <div className={classNames(styles.root, { [styles.desktop]: !isPhoneWidth })}>
      {!isPhoneWidth && <Image src={'/img/bg-desktop.png'} alt='' fill />}
      <HearSvg className={styles.text} />
      {isPhoneWidth && <LogoSvg className={styles.logo} />}
    </div>
  )
}
