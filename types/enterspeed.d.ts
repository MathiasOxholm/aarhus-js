import type { HorizontalNavigationLink } from '#ui/types';
import type { SiteSettings } from './app';

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

export type EnterspeedHandle = 'navigation' | 'home' | 'currency' | 'translations' | 'settings' | string
export type EnterspeedPageType = 'contentPage' | 'products' | 'product' | 'home'

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
    settings: SiteSettings
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
    ctaCaption: string
    ctaLink: {
      url: string
      name: string
    }
  }
}

export type EnterspeedContentPage = EnterspeedUrlResponse & {
  route: EnterspeedContentPageRoute
}

type EnterspeedProductContent = {
  blocks: EnterspeedBlock[]
}

export type EnterspeedProduct = {
  type: string
  name: string
  description: string
  price: number
  href: string
  sku: string
  currency: {
    defaultCurrency: string
  }
  content: EnterspeedProductContent[]
}

export type EnterspeedProductView = {
  views: {
    [key: string]: EnterspeedProduct
  }
}

export type EnterspeedProductList = EnterspeedContentPage & {
  route: {
    products: EnterspeedProduct[]
  }
}

export type EnterspeedBlockType = 'blockText' | 'blockImage'

export type EnterspeedBlock = {
  alias: EnterspeedBlockType
}