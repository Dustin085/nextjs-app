async function Home() {
    interface Album {
        userId: number,
        id: number,
        title: string,
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) { throw new Error('Failed to fetch albums data.') };

    const albums = await response.json() as Album[];
    return (
        <>
            <ul>
                {albums.map((album) => {
                    return (
                        <li key={album.id}>
                            <h3>{album.title}</h3>
                            <p>{`Album Id : ${album.id}`}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Home;