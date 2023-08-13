import { ReactNode } from 'react'
import classNames from 'classnames'

const colors = {
  black: 'text-custom-black',
  blue: 'text-custom-blue',
  teal: 'text-custom-teal',
  mint: 'text-custom-mint',
}

const sizes = {
  xs: 'text-lg',
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
  xxl: 'text-5xl',
  title: 'text-8xl',
}

const weights = {
  300: 'font-light',
  400: 'font-regular',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
}

interface TextExtendedProps extends React.ComponentProps<'span'> {
  children?: ReactNode
  color?: keyof typeof colors
  size?: keyof typeof sizes
  weight?: keyof typeof weights
  extra?: string // This prop is to add things like padding and margin.
  // You can get the intellisense by going to the tailwind intellisense extention and adding 'extra' as an item
}

const Text = ({
  children = 'sample text',
  color = 'black',
  size = 'md',
  weight = 400,
  extra,
  ...restProps
}: TextExtendedProps): JSX.Element => {
  return (
    <span
      className={classNames(sizes[size], colors[color], weights[weight], extra)}
      {...restProps}
    >
      {children}
    </span>
  )
}

export default Text
