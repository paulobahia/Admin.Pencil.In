export interface NavSettingsItem {
  label: string;
  icon: JSX.Element;
  subNavItem: SubNavSettingsItem[]
}

interface SubNavSettingsItem {
  label: string;
  path: string;
}