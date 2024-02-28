import type { HorizontalNavigationLink } from '#ui/types';
import type { EnterspeedCurrency } from '@/types/enterspeed';

export type SiteSettings = {
  siteName: string
}

export type AppState = {
  navigation: HorizontalNavigationLink[] | null
  settings: SiteSettings | null
  currency: EnterspeedCurrency | null
}