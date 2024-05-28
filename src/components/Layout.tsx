import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <nav className='pl-10 p-7'>
                <ul>
                    <li className='font-monserrat text-xl'>Home</li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
