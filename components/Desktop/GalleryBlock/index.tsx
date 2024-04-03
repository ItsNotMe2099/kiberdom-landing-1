import { useResize } from '@/components/hooks/useResize'
import styles from './index.module.scss'
import Image from 'next/image'

interface Props {
  className?: string
}

export default function GalleryBlock(props: Props) {

  const { isPhoneWidth, isSmDesktopWidth, isLDesktopWidth, isVLDesktopWidth } = useResize()

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.row}>
          <Image className={styles.first} src={'/img/gallery/1.png'} alt='' fill />
          <Image className={styles.second} src={'/img/gallery/2.png'} alt='' fill />
        </div>
        <div className={styles.row}>
          <Image src={'/img/gallery/3.png'} alt='' fill />
          <Image src={'/img/gallery/4.png'} alt='' fill />
          <Image src={'/img/gallery/5.png'} alt='' fill />
        </div>
      </div>
    </div>
  )
}
