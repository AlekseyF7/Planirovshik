import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"

import "./globals.css";

export const metadata = {
  title: "Planirovshik",
  description: "Planirovshik for school",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
