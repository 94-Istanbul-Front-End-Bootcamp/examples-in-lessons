export default [
    {
        to: "/",
        name: "home"
    },
    {
        to: "/settings",
        name: "settings",
        childeren: [
            {
                name: "user settings",
                to: "/settings/user"
            },
            {
                name: "profile settings",
                to: "/settings/profile"
            },
        ]
    },
    {
        to: "/profile",
        name: "profile"
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Rehber',
        to: '/rehber',
        icon: <CIcon content={freeSet.cilAddressBook} customClasses="c-sidebar-nav-icon" />,
        badge: {
            color: 'info',
        },
    },
]