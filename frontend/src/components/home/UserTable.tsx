import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const UserTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const users = [
        { id: 1, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 2, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 3, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 4, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 5, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 6, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 7, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 8, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 9, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 10, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 11, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 12, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 13, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 14, name: `מיכאל גני`, email: `mike165@gmail.com` },
        { id: 15, name: `נועם מושקוביץ`, email: `noammz101@gmail.com` },
        { id: 16, name: `מיכאל גני`, email: `mike165@gmail.com` },
    ]

    const handleChangePage = (newPage: number) => {
        const maxPage = Math.ceil(users.length / rowsPerPage)

        if (newPage < 0) return
        if (newPage >= maxPage) return

        setPage(newPage);
    };

    const handleChangeRowsPerPage = (value) => {
        setRowsPerPage(+value);
        setPage(0);
    };
    /*  const previousPage = () => {
         if (rowStart - rowsPerPage <= 0) {
             setRowStart(0)
             setRowEnd(rowsPerPage)
         } else {
             setRowStart(rowStart - rowsPerPage)
             setRowEnd(rowStart)
         }
     } */

    return (
        <div
            dir='rtl'
            className='w-screen pt-10 overflow-y-scroll max-h-screen'
        >
            <Table className='w-[600px] m-auto border-2  '>
                <TableCaption>A List Of Users</TableCaption>
                <TableHeader >
                    <TableRow>
                        <TableHead className='text-right font-bold'>
                            #
                        </TableHead>
                        <TableHead className='text-right font-bold'>
                            שם
                        </TableHead>
                        <TableHead className='text-right font-bold'>
                            אימייל
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            <button
                                onClick={() => handleChangePage(page - 1)}
                                className='ml-4'
                            >קודם</button>
                            <div className='inline ml-4'>{rowsPerPage}</div>
                            <button
                                onClick={() => handleChangePage(page + 1)}
                            >הבא</button>
                        </TableCell>
                        <TableCell>
                            <Select
                                onValueChange={(value) => handleChangeRowsPerPage(value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder={rowsPerPage} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default UserTable
