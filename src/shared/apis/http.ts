import baseHttp from './baseHttp'

export const httpSSR = <T>(url: string, options?: RequestInit) =>
  baseHttp<T>(url, { ...options, cache: 'no-store' })

export const httpSSG = <T>(url: string, options?: RequestInit) =>
  baseHttp<T>(url, { ...options, cache: 'force-cache' })

export const httpISR = <T>(
  url: string,
  revalidate: number,
  options?: RequestInit
) => baseHttp<T>(url, { ...options, next: { revalidate } })

export const httpCSR = <T>(url: string, options?: RequestInit) =>
  baseHttp<T>(url, options)
