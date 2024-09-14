import {Header, Footer } from '@/components/index'
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            
            <main className='min-h-screen'>
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}