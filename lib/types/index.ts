export type ColorKind =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type TooltipPosition = "left" | "right" | "top" | "bottom";

export type SubItem = {
  readonly label: string;
  readonly path: string;
};

export type SocialButton = {
  readonly tooltip: string;
  readonly url: string;
  readonly icon: string;
};
