import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const UserTable = () => {
    return (
        <div
            dir='rtl'
            className='w-screen '
        >
            <Table className='w-[600px] m-auto'>
                <TableCaption>A List Of Users</TableCaption>
                <TableHeader >
                    <TableRow>
                        <TableHead className='text-right font-bold'>
                            שם
                        </TableHead>
                        <TableHead className='text-right font-bold'>
                            אימייל
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>נועם מושקוביץ</TableCell>
                        <TableCell>noammz101@gmail.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>מיכאל גני</TableCell>
                        <TableCell>noammz101@gmail.com</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default UserTable
