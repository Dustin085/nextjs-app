import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'All books',
    description: 'All of our books are here.'
}

async function Page() {
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json();
    return (
        <main>
            <code>{JSON.stringify(books, null, 2)}</code>
        </main>
    );
}

export default Page;