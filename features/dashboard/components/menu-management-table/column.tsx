"use client";

// HeroUI
import { Chip } from "@heroui/chip";
// Prisma
import { Menu, Role } from "@/app/generated/prisma";
// React Table
import { ColumnDef } from "@tanstack/react-table";
import { Tooltip } from "@heroui/tooltip";
// Icons
import { EyeIcon, EditIcon, DeleteIcon } from "lucide-react";

const columns: ColumnDef<Menu>[] = [
    {
        accessorKey: "id",
    },
    {
        accessorKey: "role",
        header: "نقش",
        cell({ cell }) {
            const value = cell.getValue() as Role;

            return (
                <Chip color={value === "ADMIN" ? "secondary" : "primary"}>
                    {value === "ADMIN" ? "مدیر" : "کاربر"}
                </Chip>
            );
        },
    },
    {
        accessorKey: "menu_position",
        header: "جایگاه منو",
    },
    {
        accessorKey: "createdAt",
        header: "تاریخ ایجاد",
        cell({ cell }) {
            const value = cell.getValue() as Role;

            return new Date(value).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });
        },
    },
    {
        id: "actions",
        header: "اقدامات",
        cell() {
            return (
                <div className="flex items-center justify-center gap-2">
                    <Tooltip content="جزیات منو">
                        <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                            <EyeIcon />
                        </span>
                    </Tooltip>
                    <Tooltip content="ویرایش منو">
                        <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                            <EditIcon />
                        </span>
                    </Tooltip>
                    <Tooltip color="danger" content="حذف منو">
                        <span className="text-danger cursor-pointer text-lg active:opacity-50">
                            <DeleteIcon />
                        </span>
                    </Tooltip>
                </div>
            );
        },
    },
];

export default columns;
