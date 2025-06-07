// HeroUI
import { Card, CardHeader, CardBody } from "@heroui/card";
// Next
import Image from "next/image";

interface CardWrapperProperties {
    children: React.ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProperties) {
    return (
        <Card className="m-3 w-full max-w-lg p-6">
            <CardHeader>
                <Image
                    alt="logo"
                    className="mx-auto"
                    height={6}
                    src="/images/logo.svg"
                    width={230}
                />
            </CardHeader>
            <CardBody>{children}</CardBody>
        </Card>
    );
}
