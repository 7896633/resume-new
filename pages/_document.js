import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-r from-sky-300 to-white dark:from-dark-500 dark:to-dark-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
