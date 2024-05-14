export interface StepProps {
    id: string;
    name: string;
    description?: string;
    status: "upcoming" | "current" | "complete";
    href: string;
    color: "dark_blue" | "blue" | "light_blue" | "yellow";
}