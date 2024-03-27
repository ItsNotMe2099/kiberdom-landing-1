import Image from 'next/image'
import styles from './index.module.scss'
import Item from './Item'

interface Props {

}

export default function LifehacksDigital(props: Props) {

  const items = [
    { desc: <>Используй <span>двухфакторную аутентификацию,</span> она действительно работает.</> },
    { desc: <>Договорись с близкими о <span>кодовом слове,</span> чтобы отличить искусственный интеллект<br /> или аудиосообщение, сгенерированное нейросетью, от своего родственника / друга.</> },
    {
      desc: <><span>Не используй одни и те же пароли<br/> на разных сайтах:</span> плохо защищенные<br /> сайты легко взламывают и оттуда<br /> твой пароль сразу применяют<br /> к сайтам, которые сложнее<br /> взломать.</>
    },
    { desc: <>Чтобы было проще запоминать,<br/> <span>придумай алгоритм создания паролей,</span> который знаешь только ты. Например,<br/> пароль будет составным: Сайт_ТвоеИмя_Цифры.<br/> Так ты всегда сможешь создать новый пароль для каждого сайта и потом его будет легче вспомнить.</> },
    { desc: <><span>Используй приложения</span> для хранения паролей.</> },
    { desc: <>При получении нехарактерной коммуникации всегда подожди какое-то время, прежде чем реагировать. Дай себе время понять, что тебя смутило в сообщении или письме, и решить, <span>стоит ли доверять источнику.</span></> },
    {
      desc: <><span>Никогда не переходи по ссылкам
        от незнакомых отправителей</span> и не открывай файлы от них.</>
    },
    { desc: <><span>Если тебе приходят одинаковые письма со ссылками на переводы</span> - свяжись с отправителем и попроси продублировать. Повторные письма могут быть отправлены мошенниками.</> },
    {
      desc: <><span>Обращайте внимание на доменное имя в строке браузера</span> - соответствует ли оно наименованию компании или сайта, нет
        ли опечатки или подмены букв.</>
    },
    { desc: <>Если тебе позвонили из банка <span>и просят сообщить код или подтвердить операцию - положи трубку и перезвони в свой банк для уточнения</span> - вдруг это мошенники. Также в мобильных приложениях банков есть услуга - сообщить о мошенничестве - это поможет тебе обезопасить свои финансы и помочь банку в расследовании и розыске киберпреступников.</> },
  ]


  return (
    <div className={styles.root}>
      <Image className={styles.bg} src={'/img/bg2.png'} alt='' fill />
      <Image className={styles.vase} src={'/img/vase.png'} alt='' fill />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.top}>
            Лайфхаки для
          </div>
          <div className={styles.bottom}>
            цифрового мира
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {items.map((i, index) =>
          <Item index={index + 1} desc={i.desc} key={index} />
        )}
      </div>
    </div>)

}
