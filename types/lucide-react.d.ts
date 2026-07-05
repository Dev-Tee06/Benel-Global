declare module "lucide-react" {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type Icon = (props: LucideProps) => JSX.Element;

  export const ArrowRight: Icon;
  export const ArrowUpRight: Icon;
  export const BadgeCheck: Icon;
  export const BarChart3: Icon;
  export const Briefcase: Icon;
  export const CheckCircle: Icon;
  export const CheckCircle2: Icon;
  export const Clock: Icon;
  export const Code2: Icon;
  export const Crosshair: Icon;
  export const Compass: Icon;
  export const Eye: Icon;
  export const Facebook: Icon;
  export const Instagram: Icon;
  export const Layers: Icon;
  export const Lightbulb: Icon;
  export const Linkedin: Icon;
  export const Mail: Icon;
  export const Megaphone: Icon;
  export const Menu: Icon;
  export const MessageCircle: Icon;
  export const MoveRight: Icon;
  export const Phone: Icon;
  export const Rocket: Icon;
  export const Send: Icon;
  export const Sparkles: Icon;
  export const Stethoscope: Icon;
  export const Target: Icon;
  export const TrendingUp: Icon;
  export const X: Icon;
  export const Zap: Icon;
}
