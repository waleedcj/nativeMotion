export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      {
        title: "Install Expo",
        href: "/install-expo",
      },
      {
        title: "Install Reanimated",
        href: "/install-reanimated",
      },
      {
        title: "Setup Theme",
        href: "/setup-theme",
      },
      {
        title: "Install Icons",
        href: "/install-icons",
      },
      {
        title: "Setup Theme Provider (optional)",
        href: "/setup-theme-provider",
      },
    ],
  },
  {
    title: "Components",
    href: "/components",
    noLink: true,
    items: [
      {title: "Animated Header", href: "/animated-header"},
      {title: "Scale Button", href: "/scale-button"},
      {title: "3D Button", href: "/three-dimension-button"},
      {title: "Icon Button", href: "/icon-button"},
      {title: "Pulse Button", href: "/pulse-button"},
      {title: "Shadow Button", href: "/shadow-button"},
      {title: "Step Animation Button", href: "/step-button"},
      {title: "Smooth Button", href: "/smooth-button"},
      {title: "Gradient Button", href: "/gradient-button"},
      {title: "Floating Label TextInput", href: "/floating-text-input"},
      {title: "OTP Input", href: "/otp-input"},
      {title: "Smooth Border TextInput", href: "/smooth-border-text-input"},
      {title: "Radial Gradient Background", href: "/radial-gradient-background"},
      {title: "Tabs", href: "/animated-tabs"},
      {title: "Typography", href: "/typography"},
      {title: "Skeleton", href: "/skeleton"},
      {title: "Scroll Pagination Dots", href: "/scroll-pagination-dots"},
      {title: "Swipe Slider", href: "/swipe-slider"},
      {title: "Circular Progress", href: "/animated-progress-circle"},
      {title: "Progress Bar", href: "/progress-bar"},
      {title: "Transition Circular Progress", href: "/transition-progress-circle"},
      {title: "Pie Chart Insights", href: "/pie-chart-insights"},
      {title: "All In One Search Bar", href: "/all-in-one-search-bar"},
      {title: "Dropdown Picker", href: "/dropdown-picker"},
      {title: "Real Time Crypto Price Card", href: "/single-crypto-card", tag: "New"},
    ],
  },
  {
    title: "Screens",
    href: "/screens",
    noLink: true,
    items: [
      {title: "Dynamic Credit Card Form", href: "/card-info-animated-form"},
      {title: "Signup Form", href: "/signup-form"},
      {title: "Onboarding", href: "/onboarding"},
      {title: "Crypto Price Card List", href: "/crypto-card-list", tag: "New"},
    ]
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
