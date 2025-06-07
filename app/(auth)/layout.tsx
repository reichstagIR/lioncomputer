interface ILayoutProperties {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProperties) {
    return (
        <div className="flex h-dvh items-center justify-center">{children}</div>
    );
}
