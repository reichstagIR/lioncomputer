// Next
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "لیون کامپیوتر | ورود",
};

interface ILayoutProperties {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProperties) {
    return (
        <div className="flex h-dvh items-center justify-center">{children}</div>
    );
}
