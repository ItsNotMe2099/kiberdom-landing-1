import { useResize } from '@/components/hooks/useResize'
import styles from './index.module.scss'

interface Props {
  className?: string
}

export default function GalleryBlock(props: Props) {

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
    <div className={styles.root}>
      
    </div>
  )
}
