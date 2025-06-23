function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2 className="text-2xl">Dashboard</h2>
            {children}
        </div>
    );
}

export default Layout;