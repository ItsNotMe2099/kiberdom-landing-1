import Image from 'next/image'
import styles from './index.module.scss'
import Item from './Item'

interface Props {

}

export default function LifehacksReal(props: Props) {

  const items = [
    { desc: <><span>Чередуй</span> игры компьютерные с настольными.</> },
    { desc: <>Больше <span>гуляй.</span></> },
    {
      desc: <>Отдавай по возможности предпочтение <span>живому</span> общению.</>
    },
    { desc: <><span>Почитай книжку</span> с ребенком, а не включай ему мультики.</> },
    { desc: <>Делись <span>впечатлениями</span> о прошедшем дне с семьей/друзьями за ужином.</> },
    { desc: <>Во время совместных приемов пищи убирай телефоны и <span>наслаждайся</span> живым общением.</> },
    {
      desc: <><span>Сходи на матч</span> на стадион, а не смотри игру по телевизору. </>
    },
    { desc: <>Проводи больше времени на <span>природе.</span></> },
    {
      desc: <>Сходи в библиотеку или <span>купи бумажную книгу</span> вместо электронной в телефоне.</>
    },
    { desc: <>Не пользуйся телефоном <span>минимум</span> за полчаса до сна.</> },
    { desc: <><span>Поговори</span> с друзьями в лесу у костра, а не по телефону. </> },
    { desc: <>Устрой вечер <span>воспоминаний</span> с друзьями.</> },
    { desc: <><span>Привези букет</span> маме/бабушке/сестре/девушке сам, а не отправляй курьера.</> },
    { desc: <>Покажи детям район/любимые места <span>детства.</span></> },
    { desc: <>Отвези близкого человека сам, <span>не заказывай такси.</span></> },
  ]


  return (
    <div className={styles.root}>
      <Image className={styles.bg} src={'/img/bg3.png'} alt='' fill />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            Лайфхаки для
          </div>
          <div className={styles.bottom}>
            реального мира
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {items.map((i, index) =>
          <Item index={index + 1} desc={i.desc} key={index} />
        )}
      </div>
    </div>
  )
}
