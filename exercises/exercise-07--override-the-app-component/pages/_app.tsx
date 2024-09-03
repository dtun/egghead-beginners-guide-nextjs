import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  pageProps.title = 'this is my title!'

  return <Component {...pageProps} />
}

export default App
