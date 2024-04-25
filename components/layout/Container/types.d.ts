export type ContainerProps = ContainerOwnProps & {
    component?: React.ElementType;
};

export interface ContainerOwnProps {
    children?: React.ReactNode;
    className?: string,
    fixed?: boolean;
}