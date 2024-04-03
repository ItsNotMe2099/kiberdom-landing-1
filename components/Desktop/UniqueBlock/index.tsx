import styles from './index.module.scss'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ItemsBlock from '../ItemsBlock'
import ReviewsBlock from '../ReviewsBlock'
import FooterDesktop from '../FooterDesktop'
import CostBlock from '../CostBlock'

interface Props {
  className?: string
}

export default function UniqueBlock(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h2>уникальное фиджитал-<br />пространство <div className={styles.number}>2500 м2</div></h2>
        <div className={styles.security}>
          Полностью посвящённое кибербезопасности
        </div>
      </div>
      <div className={styles.bottom}>
        Миссия Кибердома — сделать кибербезопасность неотъемлемой частью<br /> российской идентичности и предметом национальной гордости
      </div>
      <div className={styles.section}>
        <Image src={'/img/unique-gallery.png'} alt='' fill />
        <Button className={styles.btn} color='yellow'>
          Купить билет
        </Button>
        <ItemsBlock />
        <ReviewsBlock />
        <CostBlock />
        <FooterDesktop />
      </div>
    </div>

  )
}
