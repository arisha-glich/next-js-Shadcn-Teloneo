import {
 ColumnDef,
 flexRender,
 getCoreRowModel,
 getFilteredRowModel,
 getPaginationRowModel,
 getSortedRowModel,
 useReactTable,
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
 ArrowUpDown,
} from 'lucide-react';
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from '@/components/ui/table';
import useSearchURL from '@/hooks/use-search-params';
import { useEffect } from 'react';
import TableLoading from './loading-table';
import Arrow2 from '@/public/arrow-right-solid 1.svg';
import Arrow from '@/public/patient/4.svg';

interface ITable<TData, TValue> {
 columns: ColumnDef<TData, TValue>[];
 data: TData[];
 isLoading: boolean;
 enableSorting?: boolean;
}

export function DataTable<TData, TValue>({
 columns,
 data,
 isLoading,
 enableSorting = false,
}: ITable<TData, TValue>) {
 const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
 });

 const { params } = useSearchURL();
 const tableSearch = params.get('qtable');

 useEffect(() => {
  if (tableSearch) {
   table.setGlobalFilter(tableSearch);
  }
 }, [table, tableSearch]);

 if (isLoading) return <TableLoading length={columns.length} />;

 const totalItems = data.length;
 const pageSize = table.getState().pagination.pageSize;
 const currentPage = table.getState().pagination.pageIndex + 1;
 const totalPages = table.getPageCount();
 const rowStart = currentPage * pageSize - pageSize + 1;
 const rowEnd = Math.min(rowStart + pageSize - 1, totalItems);

 return (
  <>
   <div className="">
    <Table>
     <TableHeader>
      {table.getHeaderGroups().map((headerGroup, i) => (
       <TableRow key={headerGroup.id + i}>
        {headerGroup.headers.map((header, i) => {
         return (
          <TableHead key={header.id + i} className="text-xs">
           {enableSorting ? (
            <button
             type="button"
             className="flex items-center"
             onClick={() => {
              header.column.toggleSorting();
             }}
            >
             {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
             <ArrowUpDown className="ml-2 h-4 w-4" />
            </button>
           ) : header.isPlaceholder ? null : (
            flexRender(header.column.columnDef.header, header.getContext())
           )}
          </TableHead>
         );
        })}
       </TableRow>
      ))}
     </TableHeader>
     <TableBody>
      {table.getRowModel().rows?.length ? (
       table.getRowModel().rows.map((row, i) => (
        <TableRow
         key={row.id + i}
         data-state={row.getIsSelected() && 'selected'}
        >
         {row.getVisibleCells().map((cell, i) => (
          <TableCell key={cell.id + i}>
           {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
         ))}
        </TableRow>
       ))
      ) : (
       <TableRow>
        <TableCell colSpan={columns.length} className="h-24 w-full text-center">
         No results.
        </TableCell>
       </TableRow>
      )}
     </TableBody>
    </Table>
   </div>
   {totalItems > 10 && (
    <div className="flex w-full flex-wrap items-center justify-between py-4">
     {/* Pagination Controls */}
     <div className="flex items-center space-x-2">
      <Button
       variant="outline"
       size="sm"
       onClick={() => table.previousPage()}
       disabled={!table.getCanPreviousPage()}
      >
       <Arrow2 width="20px" height="20px" />
      </Button>

      {/* Page Number Buttons */}
      {Array.from({ length: totalPages }, (_, index) => (
       <Button
        key={index}
        variant={currentPage === index + 1 ? 'default' : 'outline'}
        size="sm"
        onClick={() => table.setPageIndex(index)}
       >
        {index + 1}
       </Button>
      ))}

      {/* Next Page Button */}
      <Button
       variant="outline"
       size="sm"
       className="bg-primary hover:bg-primary"
       onClick={() => table.nextPage()}
       disabled={!table.getCanNextPage()}
      >
       <Arrow width="20px" height="20px" />
      </Button>

      {/* Last Page Button */}
      <div className="text-sm text-muted-foreground">
       {rowStart} - {rowEnd} of {totalItems}
      </div>
     </div>
     {/* Row Range and Total Count */}
    </div>
   )}
  </>
 );
}
