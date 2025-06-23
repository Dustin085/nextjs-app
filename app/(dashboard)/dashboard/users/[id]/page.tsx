function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <h1 className='text-3xl'>User Details Page for user {id}</h1>
    );
}

export default Page;