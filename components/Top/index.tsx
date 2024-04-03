import styles from './index.module.scss'
import HearSvg from '../svg/HearSvg'
import LogoSvg from '../svg/LogoSvg'
import classNames from 'classnames'
import { useResize } from '../hooks/useResize'
import Hear1024Svg from '../svg/Hear1024Svg'
import Hear1440Svg from '../svg/Hear1440Svg copy'
import Button from '../ui/Button'
import From12Svg from '../svg/From12Svg'

interface Props {
  className?: string
}

export default function Top(props: Props) {

  const { isPhoneWidth, isSmDesktopWidth, isLDesktopWidth, isVLDesktopWidth } = useResize()

  const getBg = () => {
    if (isSmDesktopWidth) {
      return '/img/bg-desktop-1024.png'
    }
    else if (isLDesktopWidth) {
      return '/img/bg-desktop-1440.png'
    }
    else if (isVLDesktopWidth) {
      return '/img/bg-desktop-1920.png'
    }
    else {
      return ''
    }
  }

  const getHearSvg = () => {
    if (isSmDesktopWidth) {
      return <Hear1024Svg className={styles.text} />
    }
    else if (isPhoneWidth) {
      return <HearSvg className={styles.text} />
    }
    else {
      return <Hear1440Svg className={styles.text} />
    }
  }

  return (
    <div className={classNames(styles.root, { [styles.desktop]: !isPhoneWidth })}
      style={{ backgroundImage: `url(${getBg()})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      {getHearSvg()}
      {isPhoneWidth && <LogoSvg className={styles.logo} />}
      {!isPhoneWidth &&
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.top}>
              Иммерсивный спектакль<br />
              <span>про безопасность</span><br />
              и встречу с собой на единственном<br />
              в мире фиджитал киберполигоне
            </div>
            <Button color='yellow'>
              Купить билет
            </Button>
            <div className={styles.section}>
              <div className={styles.text}>
                От создателей Кибердома и Лилии Дасаевой, автора<br /> шоу «Мечтай», на крупнейшей арене России
              </div>
              {!isSmDesktopWidth && <From12Svg />}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
