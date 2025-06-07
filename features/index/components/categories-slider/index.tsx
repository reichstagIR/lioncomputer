// Component
import Category from "./category";
// HeroUI
import { Card } from "@heroui/card";
import { Divider } from "@heroui/divider";
// Icon
import {
    Gamepad,
    CircuitBoard,
    Gpu,
    Monitor,
    Cpu,
    Keyboard,
} from "lucide-react";

export default function CategorySlider() {
    return (
        <section className="main-container py-10">
            <Card className="grid grid-flow-col grid-cols-[repeat(auto-fill,1fr] overflow-x-auto rounded-lg py-4">
                <Category
                    href="#"
                    icon={<Gamepad className="text-green-700" size={65} />}
                    title="کنسول بازی"
                />
                <Divider orientation="vertical" />
                <Category
                    href="#"
                    icon={<Gpu className="text-green-700" size={65} />}
                    title="کارت گرافیک"
                />
                <Divider orientation="vertical" />
                <Category
                    href="#"
                    icon={<CircuitBoard className="text-green-700" size={65} />}
                    title="مادر برد"
                />
                <Divider orientation="vertical" />
                <Category
                    href="#"
                    icon={<Monitor className="text-green-700" size={65} />}
                    title="مانیتور"
                />
                <Divider orientation="vertical" />
                <Category
                    href="#"
                    icon={<Cpu className="text-green-700" size={65} />}
                    title="پردازنده"
                />
                <Divider orientation="vertical" />
                <Category
                    href="#"
                    icon={<Keyboard className="text-green-700" size={65} />}
                    title="کنسول بازی"
                />
            </Card>
        </section>
    );
}
