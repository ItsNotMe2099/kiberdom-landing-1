import styles from './index.module.scss'
import ItemSmileSvg from '@/components/svg/ItemSmileSvg'
import ItemHearthSvg from '@/components/svg/ItemHearthSvg'
import ItemRocketSvg from '@/components/svg/ItemRocketSvg'
import ItemUserSvg from '@/components/svg/ItemUserSvg'
import ItemCupSvg from '@/components/svg/ItemCupSvg'

interface Props {
  className?: string
}

export default function ItemsBlock(props: Props) {

  const items = [
    { icon: <ItemSmileSvg />, text: <>Актуальная тема для взрослых и детей — безопасность аналоговая<br /> и цифровая</> },
    { icon: <ItemHearthSvg />, text: <>Самое модное технологическое место Москвы 2024<br />Кибердом — место силы российского кибербеза</> },
    { icon: <ItemRocketSvg />, text: <>Иммерсивный формат, когда каждый гость является полноценным<br /> участником спектакля</> },
    { icon: <ItemUserSvg />, text: <>Маленькие группы и индивидуальный подход к каждому гостю Возможность<br /> закрыть группу под свою компанию</> },
    { icon: <ItemCupSvg />, text: <>Возможность продолжить вечер в кафе в уютном пространстве Кибердома<br /> после спектакля</> },
  ]

  return (
    <div className={styles.root}>
      {items.map((i, index) =>
        <div key={index} className={styles.item}>
          {i.icon}
          <div className={styles.text}>{i.text}</div>
        </div>
      )}
    </div>
  )
}
