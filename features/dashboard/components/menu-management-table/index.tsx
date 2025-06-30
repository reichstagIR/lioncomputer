"use client";

// HeroUI
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/table";
import { Pagination } from "@heroui/pagination";
// Prisma
import { Menu } from "@/app/generated/prisma";
// Hook
import usePagination from "@/shared/hooks/use-pagination";
// React Table
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
// Component
import columns from "./column";

interface IMenuManagementTableProperties {
    menus: Menu[];
}

export default function MenuManagementTable({
    menus,
}: IMenuManagementTableProperties) {
    const { pages, selectItems, setPage, page } = usePagination<Menu>({
        items: menus,
        maxLength: menus.length,
        rowsPerPage: 10,
    });

    const table = useReactTable({
        data: selectItems,
        columns,
        getCoreRowModel: getCoreRowModel(),
        initialState: {
            columnVisibility: {
                id: false,
            },
        },
    });

    return (
        <Table
            aria-label="Menu management table"
            bottomContent={
                pages > 1 ? (
                    <Pagination
                        className="mx-auto"
                        color="success"
                        isCompact
                        onChange={(page) => setPage(page)}
                        page={page}
                        showControls
                        showShadow
                        total={pages}
                    />
                ) : undefined
            }
        >
            <TableHeader>
                <>
                    {table.getHeaderGroups().map((headerGroup) =>
                        headerGroup.headers.map((header) => (
                            <TableColumn align="center" key={header.id}>
                                {header.isPlaceholder
                                    ? undefined
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </TableColumn>
                        ))
                    )}
                </>
            </TableHeader>
            <TableBody emptyContent="رکوردی وجود ندارد!">
                {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
