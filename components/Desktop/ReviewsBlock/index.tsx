import Image from 'next/image'
import styles from './index.module.scss'

interface Props {
  className?: string
}

export default function ReviewsBlock(props: Props) {

  const items = [
    { avatar: '/img/avatar.svg', text: <>Посетив иммерсивное шоу «Я тебя слышу» в Кибердоме, я просто не могу скрыть своего восторга и глубоких эмоций, которые я испытал в течение всего представления. С самого начала и до самого конца шоу погрузило меня в уникальный мир, где каждый звук, каждый световой луч, каждое движение актёров было наполнено глубоким смыслом и чувственностью.</> },
    { avatar: '/img/avatar.svg', text: <>Организаторы шоу «Я тебя слышу» проделали колоссальную работу, создавая не просто представление, а целую вселенную, где границы между зрителем и актёрами стираются, оставляя тебя один на один со своими ощущениями и переживаниями. Интерактивные элементы шоу дали мне возможность не только быть наблюдателем, но и непосредственным участником событий, что сделало впечатления ещё более яркими и незабываемыми.</> },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.title}>
          ОТЗЫВЫ
        </div>
        <div className={styles.reviews}>
          {items.map((i, index) =>
            <div key={index} className={styles.item}>
              <Image src={i.avatar} alt='' fill />
              <div className={styles.text}>{i.text}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
