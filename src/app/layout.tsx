import "./globals.css";
import { Montserrat } from "next/font/google";
import { cx } from "../../styled-system/css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sunny Asia Trading",
  description:
    "Our products are imported from Asia. It ranges from residential or office LED lighting, solar lighting, to construction hardware. As a wholesaler, we distribute from a manufacturer in Asia to electricians, electrical companies, hardware stores, general contractors, and residential or offices to update lighting systems in conjunction with the Biden administration's light bulb bans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(montserrat.className)}>{children}</body>
    </html>
  );
}
