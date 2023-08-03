/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

/* Instruments */
import './styles/layout.css'
import './styles/globals.css'


export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Nav />
          {props.children}
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
