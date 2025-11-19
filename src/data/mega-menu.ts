export type MegaMenuItem = {
  label: string;
  href: string;
  description?: string;
};

export type MegaMenuColumn = {
  title: string;
  items: MegaMenuItem[];
};

const megaMenu: MegaMenuColumn[] = [
  {
    title: "Explore",
    items: [
      {
        label: "Home",
        href: "/",
        description: "Discover businesses and services",
      },
      {
        label: "All Categories",
        href: "/all-catogaries",
        description: "Browse by category",
      },
      {
        label: "Search Results",
        href: "/search-results",
        description: "Find businesses by keyword or category",
      },
      {
        label: "Advertise",
        href: "/advertise",
        description: "Promote your business",
      },
    ],
  },
  {
    title: "For Businesses",
    items: [
      {
        label: "Create Business Profile",
        href: "/create-business-profile",
        description: "Add your business listing",
      },
      {
        label: "Manage My Store",
        href: "/manage-business-profile/userStore",
        description: "Edit your business details",
      },
      {
        label: "Manage All Profiles",
        href: "/manage-business-profiles",
        description: "Admin: manage listings",
      },
      {
        label: "Setup Tabs Data",
        href: "/setup-tabs-data",
        description: "Configure your store tabs",
      },
    ],
  },
  {
    title: "Community & More",
    items: [
      {
        label: "Investor Relations",
        href: "/investor-page",
        description: "Information for investors",
      },
      {
        label: "We Are Hiring",
        href: "/we-are-hiring",
        description: "Open positions and careers",
      },
      {
        label: "Login / Signup",
        href: "/login",
        description: "Access your account",
      },
      {
        label: "Contact / About",
        href: "/",
        description: "Learn more about us",
      },
    ],
  },
];

export default megaMenu;
