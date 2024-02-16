import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "My blog",
  description: "Read my fascinating stories",
}

export default ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)
