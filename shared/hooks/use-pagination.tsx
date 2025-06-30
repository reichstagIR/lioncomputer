// React
import { useMemo, useState } from "react";

interface IUseTablePaginationProperties {
    rowsPerPage: number;
    maxLength: number;
}

export default function usePagination<T>({
    rowsPerPage,
    maxLength,
    items,
}: IUseTablePaginationProperties & {
    items: T[];
}) {
    const [page, setPage] = useState(1);

    const pages = Math.ceil(maxLength / rowsPerPage);

    const selectItems = useMemo<T[]>(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return items.slice(start, end);
    }, [items, page, rowsPerPage]);

    return { selectItems, pages, page, setPage };
}
