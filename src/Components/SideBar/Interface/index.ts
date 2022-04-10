export interface ISideBarItem {
    name: string;
    link: string;
    imageSrc: string;
    target?: React.HTMLAttributeAnchorTarget;
}

export interface ISideBarItemTheme {
    nameAnimation?: boolean;
}