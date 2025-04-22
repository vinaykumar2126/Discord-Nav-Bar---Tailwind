import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
                       bg-gray-900 dark:bg-gray-950 text-white shadow-lg">
        <SidebarIcon icon={<FaFire size="28" />} text="Fire Feed" />
        <SidebarIcon icon={<BsPlus size="32" />} text="Add Server" />
        <SidebarIcon icon={<BsFillLightningFill size="20" />} text="Upgrade" />
        <SidebarIcon icon={<FaPoo size="20" />} text="Utilities" />
        <ThemeIcon />
        </div>
    );
}

const SidebarIcon = ({icon, text = "tooltip"}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

const ThemeIcon = () => {
    return (
        <div className="sidebar-icon group mt-auto mb-4" onClick={toggleTheme}>
            <svg 
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24">
                <path className="dark:hidden" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.844a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                <path className="hidden dark:block" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
            </svg>
            <span className="sidebar-tooltip group-hover:scale-100">
                Toggle Theme
            </span>
        </div>
    );
}

// Function to toggle dark mode
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
}

export default Sidebar;
