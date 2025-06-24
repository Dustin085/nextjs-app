import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = params;
    const title = `Book id: ${id}`;
    const description = 'This is book ' + id;

    return {
        title,
        description,
    }
}

async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json();
    return (
        <main>
            <code>{JSON.stringify(books[id], null, 2)}</code>
        </main>
    );
}

export default Page;