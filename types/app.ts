import type { HorizontalNavigationLink } from '#ui/types';

export type SiteSettings = {
  siteName: string
}

export type AppState = {
  navigation: HorizontalNavigationLink[] | null
  settings: SiteSettings | null
}