import { createContext, useContext, useEffect, useState } from 'react'
import { getIsMobile } from '@/utils/mobile'

interface IState {
  isMobile: boolean
  isDesktop: boolean
  headerDirection: 'up' | 'down'
}

const defaultValue: IState = {
  isMobile: false,
  isDesktop: true,
  headerDirection: 'up',
}

const AppContext = createContext<IState>(defaultValue)

interface Props {
  children: React.ReactNode
  isMobile: boolean
}

export function AppWrapper(props: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(props.isMobile)

  useEffect(() => {
    setIsMobile(getIsMobile(props.isMobile))
  }, [])

  const value: IState = {
    ...defaultValue,
    isMobile: isMobile,
    isDesktop: !props.isMobile,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
