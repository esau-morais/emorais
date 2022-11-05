import { FOCUS_VISIBLE_OUTLINE } from '@/lib/constants'
import cx from 'clsx'
import Link from 'next/link'
import { ElementType, ReactNode } from 'react'

type TBoxParams = {
  href: string
  children: ReactNode
}

const Box = ({ href, children }: TBoxParams) => {
  return (
    (<Link
      href={href}
      className={cx(
        'relative block rounded-2xl bg-white/[2%] p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/[3%] hover:shadow-surface-elevation-medium',
        FOCUS_VISIBLE_OUTLINE
      )}>

      {children}

    </Link>)
  );
}

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-xl transition duration-300 text-rose-100/80 line-clamp-2 hover:text-rose-100/90">
      {children}
    </h3>
  )
}

export const Icon = (props: { icon: ElementType }) => {
  return (
    <div className="mt-1 ml-2 shrink-0">
      <props.icon className="w-5 transition-colors text-rose-100/30 hover:text-rose-100/50" />
    </div>
  )
}

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="mt-4 text-lg text-gray-400/90 line-clamp-3">{children}</p>
  )
}

export const Meta = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-gray-500/90">{children}</div>
}

Box.Title = Title
Box.Icon = Icon
Box.Text = Text
Box.Meta = Meta

export default Box
