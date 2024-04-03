import { useResize } from '@/components/hooks/useResize'
import styles from './index.module.scss'
import HearLampSvg from '@/components/svg/HearLampSvg'

interface Props {
  className?: string
}

export default function LampBlock(props: Props) {

  const { isPhoneWidth, isSmDesktopWidth, isLDesktopWidth, isVLDesktopWidth } = useResize()

  const getBg = () => {
    if (isSmDesktopWidth) {
      return '/img/lamp-block-bg-1024.png'
    }
    else if (isLDesktopWidth) {
      return '/img/lamp-block-bg-1440.png'
    }
    else if (isVLDesktopWidth) {
      return '/img/lamp-block-bg-1920.png'
    }
    else {
      return ''
    }
  }

  return (
    <div className={styles.root}
      style={{ backgroundImage: `url(${getBg()})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className={styles.content}>
        <HearLampSvg />
        <div className={styles.text}>
          Это возможность остановиться и прочувствовать мир будущего и ностальгического прошлого в самом технологическом пространстве МосквыВозможно ли оказаться одновременно в двух мирах: реальном и виртуальном?В Кибердоме все становится возможным!Ведь только вы решаете, кто главный герой в этом фиджитал мире: вы или ваш цифровой двойник
        </div>
      </div>
    </div>
  )
}
