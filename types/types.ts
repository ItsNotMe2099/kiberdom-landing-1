import { MouseEventHandler } from 'react'
import { UrlObject } from 'url'

export const CONTACTS = {
  address: 'ул. 2-я звенигородская, д. 12, строение 18',
  phone: '+7 925 310-01-10',
  website: 'cyberdom.moscow'
}

export interface IButton {
  type?: 'submit' | 'reset' | 'button' | undefined
  form?: string
  spinner?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler | null
  href?: string | UrlObject | null
  isExternalHref?: boolean // add target blank and no referrer
}