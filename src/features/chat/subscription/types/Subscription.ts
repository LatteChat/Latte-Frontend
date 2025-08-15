export type SubscriptionType = 'premium' | 'decaffeine'

export type Subscription = {
  id: SubscriptionType
  title: string
  explanations: string[]
  period: string
  price: number
}
