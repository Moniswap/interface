import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seekers Challenge | Swap your favorite tokens on Berachain',
  description:
    "We're offering $MONI rewards to our esteemed community members through the Moniswap Seekers Program. Simply complete the tasks below - the more task you complete, the more $MONI tokens you'll receive!",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
