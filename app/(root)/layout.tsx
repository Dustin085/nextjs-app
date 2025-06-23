function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1 className="text-3xl">Narbar</h1>
            {children}
        </>
    );
}

export default Layout;