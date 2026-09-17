export type ProjectCategory = "Bridge engineering" | "Engineering software";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  overview: string;
  location?: string;
  role?: string;
  status?: string;
  tags: string[];
  contributions: string[];
  outcome?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  visual?: "segmental" | "cable" | "box" | "cantilever" | "alignment";
  links?: { label: string; href: string }[];
  featured?: boolean;
  related?: string[];
};

export const projects: Project[] = [
  {
    slug: "south-commuter-railway",
    title: "South Commuter Railway",
    category: "Bridge engineering",
    summary: "Structural design and construction engineering for prestressed segmental railway bridges in the Philippines.",
    overview:
      "The South Commuter Railway includes concrete railway bridges built using balanced-cantilever and precast segmental methods. The work calls for close coordination between structural analysis, construction stages and geometric control.",
    location: "Philippines",
    role: "Lead structural design and construction engineering",
    tags: ["Railway bridges", "Segmental concrete", "Staged construction"],
    contributions: [
      "Lead structural design and construction engineering for concrete railway bridge works.",
      "Analyse balanced-cantilever and span-by-span erection using launching gantries.",
      "Connect bridge design with digital geometry-control workflows for short-line segment casting.",
    ],
    visual: "segmental",
    featured: true,
    related: ["castcontrol"],
  },
  {
    slug: "saemangeum-ring-road",
    title: "Saemangeum Ring Road",
    category: "Bridge engineering",
    summary: "Global modelling, seismic evaluation and structural verification for a cable-stayed bridge.",
    overview:
      "A steel cable-stayed bridge with a circular pylon on the Saemangeum Ring Road TK project. The engineering scope combined global structural behaviour with detailed verification under earthquake loading.",
    location: "South Korea",
    role: "Structural modelling and verification",
    tags: ["Cable-stayed bridge", "Seismic analysis", "Steel structures"],
    contributions: [
      "Develop global structural models and detailed analyses.",
      "Evaluate structural response under earthquake loading.",
      "Prepare design calculations and verification documents for technical review and approval.",
    ],
    visual: "cable",
    featured: true,
  },
  {
    slug: "hyeongok-second-bridge",
    title: "Hyeongok 2nd Bridge",
    category: "Bridge engineering",
    summary: "Analysis and design verification of a steel composite box-girder bridge and its temporary works.",
    overview:
      "Part of the Ihwa–Samgye Road widening project, Hyeongok 2nd Bridge required structural modelling and checks for the permanent steel composite box girder and construction-related components.",
    location: "South Korea",
    role: "Structural analysis and design checks",
    tags: ["Steel box girder", "Connections", "Temporary works"],
    contributions: [
      "Model and analyse the steel composite box-girder bridge.",
      "Check steel connections and temporary formwork systems.",
      "Prepare engineering calculations, drawings and verification documentation.",
    ],
    visual: "box",
  },
  {
    slug: "an-nghia-bridge",
    title: "An Nghia Bridge",
    category: "Bridge engineering",
    summary: "Detailed design and construction-stage analysis for a balanced-cantilever bridge.",
    overview:
      "Balanced-cantilever bridge work in Can Gio, Ho Chi Minh City, with analysis focused on the structural behaviour of the bridge during construction.",
    location: "Vietnam",
    role: "Structural design and construction-stage analysis",
    tags: ["Balanced cantilever", "Construction stages", "Concrete bridge"],
    contributions: [
      "Perform detailed bridge design work.",
      "Analyse the structure through balanced-cantilever construction stages.",
    ],
    visual: "cantilever",
  },
  {
    slug: "castcontrol",
    title: "CastControl",
    category: "Engineering software",
    summary: "Digital geometry control for casting and erecting short-line precast segmental bridges.",
    overview:
      "CastControl supports alignment and tolerance verification during casting, match-casting and staged assembly. It connects bridge geometry with a reviewable construction workflow.",
    role: "Engineering workflow and software development",
    status: "Live product",
    tags: ["Bridge geometry", "Construction control", "Web application"],
    contributions: [
      "Translate short-line segmental construction procedures into digital geometry-control workflows.",
      "Automate alignment and tolerance verification across casting and erection stages.",
      "Develop the application and its engineering checks around reviewed project geometry.",
    ],
    outcome: "The documented workflow reduced manual engineering effort by up to 95%.",
    visual: "alignment",
    links: [{ label: "Open CastControl", href: "https://castcontrol.vercel.app/" }],
    featured: true,
    related: ["south-commuter-railway"],
  },
  {
    slug: "rc-designer",
    title: "RC Designer",
    category: "Engineering software",
    summary: "Browser-based reinforced-concrete section resistance and P–Mx–My interaction analysis.",
    overview:
      "A structural analysis workspace for reinforced-concrete cross sections under axial force and biaxial bending. The current documented product scope is section resistance and demand checks, not complete member design.",
    role: "Engineering method and software development",
    status: "Live demo",
    tags: ["Reinforced concrete", "P–Mx–My", "Numerical analysis"],
    contributions: [
      "Build an editor for irregular concrete sections, openings and discrete reinforcement.",
      "Expose the verified numerical mesh, interaction surfaces and chart data for review.",
      "Provide section-level demand checks and exportable engineering evidence.",
    ],
    image: "/images/rc-designer-results.png",
    imageAlt: "RC Designer resistance workspace with a 3D P–Mx–My surface and section charts",
    imageWidth: 3006,
    imageHeight: 1846,
    links: [{ label: "Open RC Designer", href: "https://pmdesigner.vercel.app/" }],
    featured: true,
  },
  {
    slug: "pus-pro",
    title: "PUS Pro",
    category: "Engineering software",
    summary: "Desktop application for prestressed composite U-type steel box-girder design and verification.",
    overview:
      "PUS Pro is a .NET desktop application developed to support structural design and verification of prestressed composite U-type steel box-girder bridges.",
    role: "Bridge engineering and .NET software development",
    status: "Desktop application",
    tags: ["Prestressed composite bridge", ".NET", "Design automation"],
    contributions: [
      "Automate code checking and design calculations for the implemented bridge system.",
      "Generate calculation sheets, quantity take-offs and technical reports.",
    ],
    links: [{ label: "Read project overview", href: "https://blog.naver.com/lxhkhu/223514032727" }],
  },
  {
    slug: "truss-designer",
    title: "Truss Designer",
    category: "Engineering software",
    summary: "Web-based truss analysis and code-based member verification.",
    overview:
      "A structural tool for analysing truss member forces and checking members against the applicable design rules used by the project.",
    role: "Engineering method and web development",
    status: "Live demo",
    tags: ["Truss analysis", "Member forces", "Design checks"],
    contributions: [
      "Model truss geometry and loading in a browser-based workspace.",
      "Automate member-force analysis and code-based verification.",
    ],
    links: [{ label: "Open Truss Designer", href: "https://struct-tools.vercel.app/truss/" }],
  },
  {
    slug: "bridge-alignment",
    title: "Bridge Alignment",
    category: "Engineering software",
    summary: "Horizontal and vertical alignment modelling for bridge geometry and field coordination.",
    overview:
      "A web-based alignment modelling application supporting bridge geometry control, construction coordination and field surveys.",
    role: "Engineering workflow and web development",
    status: "Live demo",
    tags: ["Alignment", "Bridge geometry", "Survey coordination"],
    contributions: [
      "Build tools for horizontal and vertical alignment modelling.",
      "Connect alignment information with construction and survey workflows.",
    ],
    visual: "alignment",
    links: [{ label: "Open Bridge Alignment", href: "https://struct-tools.vercel.app/alignment/" }],
  },
  {
    slug: "steel-bridge-analysis",
    title: "Steel Bridge Analysis",
    category: "Engineering software",
    summary: "Parametric analysis workspace for I-girder and box-girder bridges.",
    overview:
      "A design-oriented platform under development for modelling and analysing steel bridge systems, with a focus on I-girder and box-girder configurations.",
    role: "Structural analysis and software development",
    status: "In development",
    tags: ["Steel bridges", "Parametric modelling", "Structural analysis"],
    contributions: [
      "Develop parametric bridge geometry and analysis workflows.",
      "Present structural results in a browser-based engineering workspace.",
    ],
    image: "/images/steel-bridge-analysis.png",
    imageAlt: "Steel bridge analysis workspace showing a parametric bridge model and load-lane controls",
    imageWidth: 1440,
    imageHeight: 1050,
    links: [{ label: "Open current demo", href: "https://struct-tools.vercel.app/bridge/" }],
  },
  {
    slug: "scaffold-frame",
    title: "Scaffold Frame",
    category: "Engineering software",
    summary: "Structural CAD, frame analysis and steel member checks for scaffolding systems.",
    overview:
      "A purpose-built structural engineering application combining parametric CAD, finite-element analysis and documented steel member checks for scaffold and frame systems.",
    role: "Engineering method and software development",
    status: "In development",
    tags: ["Structural CAD", "Finite-element analysis", "Steel design"],
    contributions: [
      "Build parametric models for nodes, members, plates, restraints and loads.",
      "Connect browser and OpenSeesPy analysis paths to a shared structural model.",
      "Generate reviewable results, drawings and calculation packages within the implemented scope.",
    ],
  },
  {
    slug: "anchor-designer",
    title: "Anchor Designer",
    category: "Engineering software",
    summary: "Anchor-to-concrete verification workspace with a base-plate analysis backend.",
    overview:
      "A development-stage workspace for anchor-to-concrete checks and base-plate finite-element analysis. The repository describes its present status as a development baseline, not design certification.",
    role: "Engineering method and software development",
    status: "In development",
    tags: ["Anchors", "Concrete verification", "FEM"],
    contributions: [
      "Structure the model, loads, analysis, verification and reporting workflow.",
      "Connect anchor checks with an OpenSees-based base-plate analysis backend.",
    ],
  },
  {
    slug: "timesheets",
    title: "Timesheets",
    category: "Engineering software",
    summary: "Project-management system for time, resources, labour costs and reporting.",
    overview:
      "A full-stack project-management system for tracking time and resource allocation, controlling labour costs and reporting project performance.",
    role: "Full-stack software development",
    status: "Live product",
    tags: ["Project management", "Reporting", "Full-stack"],
    contributions: [
      "Develop time-tracking and resource-allocation workflows.",
      "Support labour-cost control and project-performance reporting.",
    ],
    links: [{ label: "Open Timesheets", href: "https://timesheets.co.kr/" }],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
