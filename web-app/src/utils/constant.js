export const navLinks = {
    home: '/',
    news: '/blogs',
    contact: '/contact',
    category: '/categories'
};

export const navs = [
    {
        key: 'home',
        name: 'Home',
        url: navLinks.home,
        active: true,
    },
    {
        key: 'category',
        name: 'Category',
        url: navLinks.category,
        active: false,
        children: [
            {
                key: 'latest',
                name: 'Latest Blogs',
                url: navLinks.category + '/latest',
                active: false,
            },
            {
                key: 'popular',
                name: 'Popular Blogs',
                url: navLinks.category + '/popular',
                active: false,
            },
        ]
    },
    {
        key: 'blog',
        name: 'Blogs',
        url: navLinks.news,
        active: false,
    },
    {
        key: 'contact',
        name: 'Contact',
        url: navLinks.contact,
        active: false,
    }
];