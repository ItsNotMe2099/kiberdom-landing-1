import Image from 'next/image'
import QuestionSvg from '../svg/QuestionSvg'
import styles from './index.module.scss'
import ArrowSvg from '../svg/ArrowSvg'
import StarsSvg from '../svg/StarsSvg'

interface Props {

}

export default function WhatToDo(props: Props) {

  return (
    <div className={styles.root}>
      <Image className={styles.bg} src={'/img/bg1.png'} alt='' fill />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.text}>
            В эпоху, когда технологии вливаются в ткань нашей повседневной жизни, <span>границы между реальным и цифровым мирами становятся</span> <span className={styles.blurred}>более размытыми.</span> Цифровая вселенная переплетается с реальностью, создавая уникальную симфонию, которая  задает звучание современной эпохе.
          </div>
          <div className={styles.bottom}>
            <QuestionSvg className={styles.question} /> Что делать, чтобы сохранить равновесие реального и цифрового и не стать легкой добычей киберакул?
          </div>
          <ArrowSvg className={styles.arrow} />
          <StarsSvg className={styles.stars} />
        </div>
      </div>
    </div>
  )
}
