import { Deposited, LiquidityRewards, Relay, VotingRewards } from './components'
import { Locks } from './components/locks'

export const DashboardPage = () => (
  <>
    <Deposited />
    <Locks />
    <Relay />
    <LiquidityRewards />
    <VotingRewards />
  </>
)
