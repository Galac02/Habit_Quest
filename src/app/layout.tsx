import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-darkreader-mode="dynamic"
      data-darkreader-scheme="dark">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
