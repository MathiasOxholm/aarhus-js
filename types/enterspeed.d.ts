import type { HorizontalNavigationLink } from '#ui/types';

export type EnterspeedResponseMeta = {
  status: number
  redirect: string | null
  missingViewReferences: string[]
}

export type EnterspeedUrlResponse = {
  route: unknown
  meta: EnterspeedResponseMeta
  views: unknown
}

export type UseEnterspeedInput = {
  url?: string
  handles?: EnterspeedHandle[]
}

export type EnterspeedHandle = 'navigation' | 'home' | 'currency'
export type EnterspeedPageType = 'contentPage' | 'products' | 'product'

export type EnterspeedNavigationItem = {
  label: string
  type: string
  href: string
  sortOrder: number
  children?: EnterspeedNavigationItem[]
}

export type EnterspeedNavigation = {
  navigationItems: HorizontalNavigationLink[]
}

export type EnterspeedNavigationResponse = EnterspeedUrlResponse & {
  views: {
    navigation: EnterspeedNavigation
  }
}

export type EnterspeedContentPageRoute = {
  type: EnterspeedPageType
  headline: string
  seoMetaDescription: string
  blocks: EnterspeedBlock[]
  url: string
  children: EnterspeedContentPageRoute[]
  hero?: {
    header?: string
    description?: string
  }
}

export type EnterspeedContentPage = EnterspeedUrlResponse & {
  route: EnterspeedContentPageRoute
}

export type EnterspeedProduct = {
  type: string
  name: string
  description: string
  price: number
  href: string
  currency: {
    defaultCurrency: string
  }
}

export type EnterspeedProductList = EnterspeedContentPage & {
  route: {
    products: EnterspeedProduct[]
  }
}

export type EnterspeedBlockType = 'blockText'

export type EnterspeedBlock = {
  alias: EnterspeedBlockType
}