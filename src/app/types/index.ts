export interface displayProps {
  toggleDisplay: () => void;
  isAuthenticated: boolean;
}

export interface closeDisplayProps {
  closeDisplay?: () => void;
  isAuthenticated: boolean;
}
