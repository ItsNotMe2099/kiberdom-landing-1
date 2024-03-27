import styles from './index.module.scss'
import HearSvg from '../svg/HearSvg'
import LogoSvg from '../svg/LogoSvg'

interface Props {

}

export default function Top(props: Props) {

  return (
    <div className={styles.root}>
      <HearSvg className={styles.text} />
      <LogoSvg className={styles.logo} />
    </div>
  )
}
