import { books, Book } from "../db";

export async function GET() {
    return Response.json(books);
}

export async function POST(request: Request) {
    const book = await request.json();
    if (isBookStrict(book)) { books.push(book); }

    return Response.json(books);
}

function isBookStrict(obj: unknown): obj is Book {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        Object.keys(obj).length === 2 &&
        'id' in obj &&
        'title' in obj &&
        typeof obj.id === 'number' &&
        typeof obj.title === 'string'
    )
}