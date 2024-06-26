import React from 'react'
import { Input } from "@/components/ui/input"


const SearchBar = ({ users, setFilteredUsers }) => {

    const handleSearch = (e) => {
        const searchValue: string = e.target.value;

        const filteredUsers = users.filter(user =>
            Object.values(user).some(value =>
                value.toString().toLowerCase().includes(searchValue.toLowerCase())
            )
        );

        setFilteredUsers(filteredUsers);
    }

    return (
        <div>
            <Input
                placeholder='חפש לקוח/ה'
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar
