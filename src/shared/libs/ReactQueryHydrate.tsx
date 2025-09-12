import { HydrationBoundary } from '@tanstack/react-query'

export default function ReactQueryHydrate({
  children,
  state,
}: {
  children: React.ReactNode
  state: any
}) {
  return <HydrationBoundary state={state}>{children}</HydrationBoundary>
}
