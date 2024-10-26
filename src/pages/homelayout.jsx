// src/pages/HomePage.jsx
import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import '../styles/homelayout.scss'; 
import Content from "../components/content/content";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Home');
    const [title, setTitle] = useState('Home');

    const handleMenuClick = (menuItem) => {
        setTitle(menuItem); // Cập nhật tiêu đề Header
    };

    return (
        <Box className={`layout ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Sidebar
                isOpen={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
                activeItem={activeItem}
                setActiveItem={setActiveItem} // Truyền setActiveItem từ HomePage
                onMenuClick={handleMenuClick}
            />
            <Box className="layout-container" sx={{ flexGrow: 1 }}>
                <Header title={title} user={{ name: 'Tấn Lực', avatar: 'https://via.placeholder.com/150' }} />
                <Box className="layout-content" sx={{ padding: 2 }}>
                   <Content />
                </Box>
            </Box>
        </Box>
    );
}
