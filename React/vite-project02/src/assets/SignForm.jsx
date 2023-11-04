import React from 'react'

export default function SignForm() {
    return (
        <div>
            <aside className='flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8'>
                <h1 className="mb-2 text-xl font-semibold">WebCity</h1>
                <input type="text" name="Search Websites" id="websitesSearch" />
                <ul>
                    <li className='p-2 border hover:bg-#212121' >Dasboard</li>
                </ul>
            </aside>

        </div>
    )
}
