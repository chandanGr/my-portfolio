export interface INavBarTheme {
    linkHoverAnimation?: boolean;
}

export interface INavbar {
    name: string;
    type?: 'link' | 'button' | undefined;
    href?: string;
    theme?: INavBarTheme;
    attributes?: any;
}