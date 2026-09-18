export type ProjectCategory = "Bridge engineering" | "Engineering software";

export type Project = {
  slug: string;
  path?: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  overview: string;
  introLink?: { label: string; href: string };
  registration?: { statement: string; label: string; href: string };
  location?: string;
  role?: string;
  status?: string;
  hideHeroMetadata?: boolean;
  tags: string[];
  contributions: string[];
  technicalCapabilities?: {
    problem: string;
    scope: string[];
  };
  mediaNote?: string;
  gallery?: { src: string; alt: string; caption: string; width: number; height: number }[];
  inPractice?: string;
  outcome?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  video?: { youtubeId: string; title: string };
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
    featured: true,
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
    featured: true,
  },
  {
    slug: "castcontrol",
    path: "/castcontrol",
    title: "CastControl",
    category: "Engineering software",
    summary: "Digital platform for managing and automating geometry control in short-line segmental bridge construction.",
    overview:
      "CastControl is a digital platform designed to manage and automate geometry control for segmental bridge construction using the short-line casting method. The platform determines multi-span and segment coordinates for complex alignments. It also connects site and design engineers in one centralized workflow: field engineers submit requests and survey data, while design engineers can review, correct, approve and distribute coordinates manually, or let the system automate the entire process.",
    introLink: { label: "Open CastControl", href: "https://castcontrol.vercel.app/" },
    registration: {
      statement: "CastControl was officially registered as an industrial software application in South Korea.",
      label: "View registration record",
      href: "https://www.cros.or.kr/psnsys/cmmn/infoPage.do?w2xPath=/ui/twc/cmmn/convenientDtl.xml&regId=C-2025-057358",
    },
    role: "Engineering workflow and software development",
    status: "Live product",
    hideHeroMetadata: true,
    tags: ["Bridge geometry", "Construction control", "Web application"],
    contributions: [
      "Translate short-line segmental construction procedures into digital geometry-control workflows.",
      "Calculate span and segment coordinates from complex bridge alignments.",
      "Connect field data, engineering review and approved coordinate distribution in one workflow.",
    ],
    image: "/images/castcontrol.png",
    imageAlt: "CastControl product page describing the digital geometry-control platform for segmental bridge construction",
    imageWidth: 1440,
    imageHeight: 900,
    video: { youtubeId: "Cvx660pE6-Q", title: "CastControl project introduction" },
    gallery: [
      { src: "/images/castcontrol/1-introduction.png", alt: "Diagram summarizing geometry-control software features from data preparation to mobile access", caption: "Geometry-control software capabilities", width: 1547, height: 867 },
      { src: "/images/castcontrol/2-alignment.png", alt: "Alignment definition screen with horizontal geometry, vertical profile and station data", caption: "Horizontal and vertical alignment definition", width: 1591, height: 872 },
      { src: "/images/castcontrol/3-castcontrol.png", alt: "Casting geometry control screen with segment coordinates and correction charts", caption: "Casting geometry control and correction review", width: 1593, height: 888 },
      { src: "/images/castcontrol/4-survey.png", alt: "Survey results input screen showing form-setting and after-casting coordinates", caption: "Survey results and coordinate review", width: 1585, height: 883 },
    ],
    inPractice:
      "CastControl is being used for geometry control across more than 1,000 bridge spans on the NSCR South project in the Philippines. The South Commuter Railway is an approximately 56 km section of the North–South Commuter Railway, connecting Solis in Metro Manila with Calamba in Laguna. The project is intended to improve public transport access, ease road congestion and reduce transport emissions.",
    outcome: "The documented workflow reduced manual engineering effort by up to 95%.",
    featured: true,
    related: ["south-commuter-railway"],
  },
  {
    slug: "rc-designer",
    path: "/RCdesigner",
    title: "Reinforced Concrete Section Designer",
    category: "Engineering software",
    summary: "Browser-based section resistance and factored demand checks for reinforced concrete under axial force and biaxial bending.",
    overview:
      "Reinforced Concrete Section Designer evaluates the axial-force and biaxial-bending resistance of short reinforced-concrete cross sections. It brings irregular concrete geometry, openings, discrete reinforcement, material response, P–Mx–My resistance surfaces and factored demand checks into one browser workspace. Its current scope is section resistance and demand checks, not complete column or member design.",
    introLink: { label: "Open live demo", href: "https://pmdesigner.vercel.app/" },
    role: "Engineering method and software development",
    status: "Live demo",
    hideHeroMetadata: true,
    tags: ["Reinforced concrete", "P–Mx–My", "Numerical analysis"],
    technicalCapabilities: {
      problem:
        "The application takes an irregular reinforced-concrete section from a verified numerical model to auditable P–Mx–My resistance results and a factored section demand check.",
      scope: [
        "Build multiple polygonal concrete regions and openings, with discrete reinforcement and material assignments.",
        "Evaluate section response using independent stress–strain integration and equivalent rectangular stress-block methods.",
        "Inspect nominal and design P–Mx–My surfaces, directional meridians, fixed-axial-force contours and the underlying chart data.",
        "Check factored section demands with utilization, capacity intersections, solver convergence and a compatible strain field.",
        "Use the implemented KDS section-check routes; ACI, Eurocode and AS profiles remain calculation previews rather than released code checks.",
        "Export browser-side projects, PDF design-preview reports, calculation workbooks and Excel or DXF mesh audit data.",
      ],
    },
    contributions: [
      "Build an editor for irregular concrete sections, openings and discrete reinforcement.",
      "Expose the verified numerical mesh, interaction surfaces and chart data for review.",
      "Provide section-level demand checks and exportable engineering evidence.",
    ],
    image: "/images/rcdesigner/interaction-surface-and-slices.png",
    imageAlt: "Three-dimensional P–Mx–My resistance surface with a directional meridian, fixed-axial-force contour and section data",
    imageWidth: 3006,
    imageHeight: 1846,
    gallery: [
      { src: "/images/rcdesigner/mesh-gauss-points.png", alt: "Verified concrete integration mesh with Gauss points and discrete reinforcement fibers", caption: "Numerical mesh and Gauss integration points", width: 3006, height: 1846 },
      { src: "/images/rcdesigner/directional-and-fixed-p-results.png", alt: "Directional P–M resistance curve with a three-dimensional surface and fixed-axial-force Mx–My contour", caption: "Directional resistance and fixed-axial-force results", width: 3006, height: 1846 },
      { src: "/images/rcdesigner/demand-check-section-field.png", alt: "Factored demand check with utilization, converged section strain field and resistance charts", caption: "Demand check and compatible section field", width: 3006, height: 1846 },
    ],
    links: [{ label: "Source code and engineering documentation", href: "https://github.com/lxhungdp/RC-concrete-section" }],
    featured: true,
  },
  {
    slug: "pus-pro",
    path: "/pus",
    title: "PUS Pro Program",
    category: "Engineering software",
    summary: "A Windows application for the design and verification of Prestressed Concrete Composited Opening U-type Steel Box Girder bridges.",
    overview:
      "PUS Pro Program is a complete workspace for designing and checking this type of steel box-girder bridge. It connects bridge geometry, structural analysis, design-code checks, calculation sheets, and quantity take-offs in one Windows application.",
    technicalCapabilities: {
      problem:
        "Bridge design teams often complete preliminary design, modelling, internal-force extraction, code checks, revisions, final calculations, and quantity take-offs in separate tools. PUS Pro brings these tasks together and includes checks for secondary bridge components. It has reduced design time by more than 90%, from about one week to a few hours.",
      scope: [
        "Horizontal and vertical alignment input, supporting multiple alignments for different bridge layouts.",
        "Automatic load calculation.",
        "Built-in solver, with the option to use external solvers.",
        "Live design-code checks.",
        "Main girder and secondary component checks, including splices, stiffeners, stringers, crossbeams, bracing systems, diaphragms, bearings, shear connectors, and welds.",
        "Excel and PDF calculation sheets and quantity tables.",
      ],
    },
    image: "/images/pus/1-modelling.png",
    imageAlt: "PUS Pro bridge model and node and element modelling workspace",
    imageWidth: 1461,
    imageHeight: 954,
    video: { youtubeId: "e2XkFhsxWxo", title: "PUS Pro Program introduction" },
    gallery: [
      { src: "/images/pus/2-crossection.png", alt: "PUS Pro deck slab and barrier modelling screen with bridge cross section", caption: "Deck slab and barrier geometry", width: 1461, height: 954 },
      { src: "/images/pus/3-bracing.png", alt: "PUS Pro bracing and stiffener layout with station table", caption: "Bracing and stiffener layout", width: 1461, height: 954 },
      { src: "/images/pus/4-dimmension.png", alt: "PUS Pro girder dimension diagram and component table", caption: "Girder component dimensions", width: 1461, height: 954 },
      { src: "/images/pus/5-load.png", alt: "PUS Pro load definition screen and bridge model", caption: "Load definition", width: 1462, height: 856 },
      { src: "/images/pus/6-result.png", alt: "PUS Pro internal force diagram on the bridge model", caption: "Analysis results and force diagrams", width: 1462, height: 856 },
      { src: "/images/pus/7-table.png", alt: "PUS Pro internal force graph and result table", caption: "Internal force graphs and tables", width: 1459, height: 845 },
      { src: "/images/pus/8-splice.png", alt: "PUS Pro splice design drawings and input table", caption: "Splice design", width: 1466, height: 854 },
      { src: "/images/pus/9-bracing.png", alt: "PUS Pro bracing system design layout and component table", caption: "Bracing system design", width: 1469, height: 851 },
      { src: "/images/pus/10-stiffener.png", alt: "PUS Pro stiffener design check table", caption: "Stiffener checks", width: 1456, height: 852 },
      { src: "/images/pus/11-quantity.png", alt: "PUS Pro steel quantity summary table", caption: "Quantity summary", width: 1455, height: 847 },
      { src: "/images/pus/12-stresschecking.png", alt: "PUS Pro sectional stress and resistance check graphs", caption: "Sectional stress and resistance checks", width: 1457, height: 859 },
      { src: "/images/pus/13-exportitem.png", alt: "PUS Pro calculation sheet export dialog", caption: "Calculation sheet export", width: 553, height: 755 },
    ],
    inPractice:
      "Wookyung Construction has used PUS Pro Program to design and verify dozens of steel box-girder bridge projects in South Korea.",
    tags: [],
    contributions: [],
  },
  {
    slug: "truss-designer",
    path: "/truss",
    title: "Truss Design",
    category: "Engineering software",
    summary: "Web-based truss and scaffolding analysis with live code-based member verification.",
    overview:
      "A structural tool for analysing truss member forces and checking members against the applicable design rules used by the project.",
    role: "Engineering method and web development",
    status: "Live demo",
    tags: ["Truss analysis", "Member forces", "Design checks"],
    contributions: [
      "Model truss geometry and loading in a browser-based workspace.",
      "Automate member-force analysis and code-based verification.",
    ],
    image: "/images/truss-designer.png",
    imageAlt: "Truss Designer workspace showing the material property panel and the 3D modelling viewport",
    imageWidth: 1440,
    imageHeight: 900,
    links: [{ label: "Open Truss Designer", href: "https://struct-tools.vercel.app/truss/" }],
  },
  {
    slug: "bridge-alignment",
    path: "/alignment",
    title: "Bridge Alignment",
    category: "Engineering software",
    summary: "Horizontal and vertical alignment modelling for bridge geometry and field coordination under multiple design standards.",
    overview:
      "A web-based alignment modelling application supporting bridge geometry control, construction coordination and field surveys.",
    role: "Engineering workflow and web development",
    status: "Live demo",
    tags: ["Alignment", "Bridge geometry", "Survey coordination"],
    contributions: [
      "Build tools for horizontal and vertical alignment modelling.",
      "Connect alignment information with construction and survey workflows.",
    ],
    image: "/images/bridge-alignment.png",
    imageAlt: "Bridge Alignment workspace showing horizontal and vertical alignment plots with clothoid transitions and station tables",
    imageWidth: 1440,
    imageHeight: 900,
    featured: true,
    links: [{ label: "Open Bridge Alignment", href: "https://struct-tools.vercel.app/alignment/" }],
  },
  {
    slug: "steel-bridge-analysis",
    path: "/steelbridge",
    title: "Steel Bridge Designer",
    category: "Engineering software",
    summary: "Design and analysis workspace for I-girder and box-girder bridges.",
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
    featured: true,
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
    path: "/anchor",
    title: "Anchor Designer",
    category: "Engineering software",
    summary: "A web workspace for anchor-to-concrete checks and finite-element analysis of base plates.",
    overview:
      "Anchor Designer brings connection geometry, factored load cases, base-plate analysis and anchor-to-concrete verification into one reviewable workflow. Its OpenSeesPy backend models plate response, concrete contact and anchor tension; only results that pass the required analysis gates can feed the current KDS checks. The project is a development baseline, not design certification or a complete connection-design release.",
    introLink: { label: "Open Anchor Designer", href: "https://anchor-designer.vercel.app/" },
    role: "Engineering method and software development",
    status: "In development",
    tags: ["Anchor connections", "Base-plate FEM", "KDS checks"],
    technicalCapabilities: {
      problem:
        "An anchor connection needs a traceable path from the physical model and applied loads to plate response, anchor demand and code checks. Anchor Designer keeps those steps together while showing when an analysis result is eligible for verification.",
      scope: [
        "Model the concrete block, base plate, steel profile and physical anchor layout in a three-dimensional workspace.",
        "Define factored load cases and review the applied forces and moments on the connection model.",
        "Generate a plate mesh and analyse a flexible plate with compression-only concrete contact and tension-only anchor springs using OpenSeesPy.",
        "Inspect plate stress contours and retain solver, equilibrium and mesh-convergence evidence before promoting FEM demand.",
        "Run the implemented KDS anchor/concrete checks and load-case envelope from accepted demand; full connection release and ACI checks remain incomplete.",
        "Export a read-only Excel record of inputs, convergence, demands, checks and diagnostics.",
      ],
    },
    contributions: [
      "Connect connection modelling, load definition, analysis, verification and reporting in one browser workflow.",
      "Build the base-plate FEM path and its evidence gates around an OpenSeesPy analysis backend.",
      "Translate accepted anchor demand into traceable KDS checks and an exportable calculation record.",
    ],
    image: "/images/anchor/1-model.png",
    imageAlt: "Anchor Designer modelling workspace with a three-dimensional base plate, steel profile, anchors and concrete block",
    imageWidth: 1608,
    imageHeight: 948,
    gallery: [
      { src: "/images/anchor/2-load.png", alt: "Anchor Designer load-case editor beside the three-dimensional anchor connection and applied load arrows", caption: "Factored load cases and applied forces", width: 1607, height: 943 },
      { src: "/images/anchor/3-fem.png", alt: "Triangular finite-element mesh on the base plate and steel profile in the Anchor Designer analysis view", caption: "Base-plate finite-element mesh", width: 1610, height: 939 },
      { src: "/images/anchor/4-result.png", alt: "Finite-element stress contour across the base plate with higher values around the central profile", caption: "Base-plate stress contour", width: 1656, height: 945 },
      { src: "/images/anchor/4-result2.png", alt: "Finite-element result contour displayed on the central steel profile", caption: "Profile result view", width: 1661, height: 941 },
      { src: "/images/anchor/4-result3.png", alt: "Finite-element result contour displayed on the plate stiffeners and profile connection", caption: "Stiffener and connection result view", width: 1661, height: 943 },
    ],
  },
  {
    slug: "moving-load",
    path: "/movingload",
    title: "Moving Load",
    category: "Engineering software",
    summary: "Solver for internal forces under 3D moving truck and lane loads with eccentricity.",
    overview: "",
    status: "Details pending",
    tags: [],
    contributions: [],
  },
  {
    slug: "timesheets",
    path: "/timesheets",
    title: "Timesheets",
    category: "Engineering software",
    summary: "One workspace for timesheets, project execution, and financial control: Manage daily work records, approvals, staffing allocation, budget tracking, and project performance from a unified system built for project-driven organizations.",
    overview:
      "Timesheets brings daily work records, approval workflows, staffing allocation, budgets, and project performance into one workspace for project-driven organizations.",
    role: "Full-stack software development",
    status: "Live product",
    tags: ["Timesheets", "Staffing allocation", "Budget tracking"],
    contributions: [
      "Develop workflows for daily work records and approvals.",
      "Connect staffing allocation with project execution and budget tracking.",
      "Show project performance and financial information in a unified workspace.",
    ],
    image: "/images/timesheets.png",
    imageAlt: "Timesheets platform landing page describing the timesheet, project execution and financial control workspace",
    imageWidth: 1440,
    imageHeight: 900,
    links: [{ label: "Open Timesheets", href: "https://timesheets.co.kr/" }],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

const softwareProjectOrder = [
  "pus-pro",
  "castcontrol",
  "rc-designer",
  "anchor-designer",
  "truss-designer",
  "steel-bridge-analysis",
  "bridge-alignment",
  "moving-load",
  "timesheets",
] as const;

export const softwareProjects = softwareProjectOrder.map((slug) => {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project?.path) throw new Error(`Missing public path for ${slug}`);
  return project;
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectByPath(path: string) {
  return softwareProjects.find((project) => project.path === path);
}
