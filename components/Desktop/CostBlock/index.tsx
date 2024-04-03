import Button from '@/components/ui/Button'
import styles from './index.module.scss'

interface Props {
  className?: string
}

export default function CostBlock(props: Props) {

  const items = [
    { cost: '5 000 ₽', category: 'категория: (12–16 лет)' },
    { cost: '7 500 ₽', category: 'категория: (16+)' },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        стоимость
      </div>
      <div className={styles.gift}>
        Подарок всем гостям спектакля — бокал просекко для гостей 18+
      </div>
      <div className={styles.info}>
        <div className={styles.gift}>
          Продолжительность: (1 час 15 минут)
        </div>
        <div className={styles.gift}>
          Группы: (до 30 человек)
        </div>
      </div>
      <div className={styles.items}>
        {items.map((i, index) =>
          <div className={styles.item} key={index}>
            <div className={styles.top}>
              <div className={styles.cost}>{i.cost}</div>
              <div className={styles.section}>
                <div className={styles.square} />
                <div className={styles.category}>{i.category}</div>
              </div>
            </div>
            <div className={styles.btns}>
              <Button className={styles.btn} color='transparent'>
                Правила посещения
              </Button>
              <Button className={styles.btn} color='yellow'>
                Купить билет
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
