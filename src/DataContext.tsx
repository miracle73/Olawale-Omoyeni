import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface BlogContextType {
    blogs: any[];
    error: string;
    loading: boolean;
    toggleBlog: (data: any[]) => void;
    toggleError: (data: string) => void;
    toggleLoading: (data: boolean) => void;
}


const BlogContext = createContext<BlogContextType | undefined>(undefined);


export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
};


export function BlogProvider({ children }: { children: ReactNode }): React.ReactElement {
    const [blogs, setBlogs] = useState<any[]>(() => {
        const storedBlogs = localStorage.getItem('blogs');
        return storedBlogs ? JSON.parse(storedBlogs) : [];
    });

    const [error, setError] = useState<string>(() => {
        const storedError = localStorage.getItem('error');
        return storedError || '';
    });

    const [loading, setLoading] = useState<boolean>(() => {
        const storedLoading = localStorage.getItem('loading');
        return storedLoading ? JSON.parse(storedLoading) : false;
    });
    const toggleBlog = (data: any[]) => {
        setBlogs(data);
    };
    const toggleError = (data: string) => {
        setError(data);
    };
    const toggleLoading = (data: boolean) => {
        setLoading(data);
    };
    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    useEffect(() => {
        localStorage.setItem('error', error);
    }, [error]);

    useEffect(() => {
        localStorage.setItem('loading', JSON.stringify(loading));
    }, [loading]);
    return (
        <BlogContext.Provider value={{ blogs, toggleBlog, toggleLoading, toggleError, error, loading }}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogProvider;
