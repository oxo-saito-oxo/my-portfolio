import { UIProvider } from "@yamada-ui/react"
import { theme } from "./theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <UIProvider theme={theme}>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}