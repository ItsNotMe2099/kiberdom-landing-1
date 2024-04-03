import styles from './index.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Spinner from 'components/ui/Spinner'
import { ReactElement, RefObject } from 'react'
import usePressAndHover from '@/components/hooks/usePressAndHover'
import useStopPropagation from '@/components/hooks/useStopPropagation'
import { IButton } from '@/types/types'

export type ButtonColor = 'yellow' | 'transparent'

export interface ButtonProps extends IButton {
  children?: React.ReactNode | null | string
  color?: ButtonColor
  className?: string
  fluid?: boolean
  buttonRef?: RefObject<any>
  press?: boolean
  hover?: boolean
  stopPropagation?: boolean
  icon?: ReactElement
  reverse?: boolean
  circle?: boolean
}

export default function Button(props: ButtonProps) {
  const [ref, press, hover] = usePressAndHover()
  useStopPropagation(ref, !props.stopPropagation)

  const cn = classNames({
    [styles.root]: true,
    [styles.disabled]: props.disabled,
    ...(props.color ? { [styles[props.color]]: true } : {}),
    [styles.fluid]: props.fluid,
    [styles.press]: props.press ?? press,
    [styles.hover]: props.hover ?? hover,
    [styles.withIcon]: !!props.icon,
  }, props.className)

  if (props.href) {
    return (
      <Link href={props.href}
        ref={props.buttonRef ?? ref}
        className={classNames(cn)}
        target={props.isExternalHref ? '_blank' : ''}
        rel={props.isExternalHref ? 'noreferrer' : ''}
        onClick={(e) => props.onClick?.(e)}>
        <span className={classNames({
          [styles.text]: true,
          [styles.textHidden]: props.spinner,
        })}>  {props.icon}{props.children}</span>
      </Link>
    )
  }

  return (
    <button
      ref={props.buttonRef ?? ref}
      type={props.type}
      form={props.form}
      onClick={(e) => {
        if (props.stopPropagation) {
          e.stopPropagation()
        }
        if (props.onClick && !props.spinner && !props.disabled) {
          props.onClick(e)
        }
      }}
      disabled={props.disabled || props.spinner}
      className={classNames(cn)}
    >
      <span className={classNames({
        [styles.text]: true,
        [styles.textHidden]: props.spinner,
        [styles.reverse]: props.reverse
      })}>{props.icon}{props.children}</span>
      <div className={classNames({
        [styles.spinner]: true,
        [styles.spinnerVisible]: props.spinner,
      })}>
        <Spinner size={22} color="#fff" secondaryColor="rgba(255,255,255,0.4)" />
      </div>
    </button>
  )
}

