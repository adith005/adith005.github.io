import Papa from 'papaparse';
import { Project, Experience, Education, Publication } from '@/types';

export function parseCSV<T>(csvText: string): T[] {
  const parsed = Papa.parse<T>(csvText, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim(),
  });
  return parsed.data;
}

export async function fetchProjectsFromCSV(): Promise<Project[]> {
  try {
    if (typeof window === 'undefined') {
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'public', 'data', 'projects.csv');
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return parseCSV<Project>(fileContent);
      }
    }

    const response = await fetch('/data/projects.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch projects.csv: ${response.statusText}`);
    }
    const csvText = await response.text();
    return parseCSV<Project>(csvText);
  } catch (error) {
    console.error('Error loading projects CSV:', error);
    return [
      {
        id: '1',
        title: 'LLM Context & Token Management Engine',
        tech_stack: 'Python, LLMs, Vector DBs',
        description: 'Developed a high-efficiency context window optimization framework that prunes dynamic conversation history to cut LLM token overhead without loss of critical context.',
        github_url: 'https://github.com/adith005/llm-context-engine',
        demo_url: '',
      },
      {
        id: '2',
        title: 'Autonomous Swarm & Vision System (Programming Lead)',
        tech_stack: 'Python, OpenCV, CNNs, Jetson Nano, Pixhawk 6x',
        description: 'Designed companion-computer vision models on Jetson Nano/Raspberry Pi interfaced via MAVLink with Pixhawk 6x flight controllers for autonomous target spraying and delivery.',
        github_url: 'https://github.com/adith005/autonomous-swarm-vision',
        demo_url: '',
      },
      {
        id: '3',
        title: 'RAG Knowledge Engine with Precise Source Citations',
        tech_stack: 'Python, LangChain, Vector Embeddings',
        description: 'Engineered a Retrieval-Augmented Generation (RAG) platform surfacing exact vector source references and document offsets for enterprise data querying.',
        github_url: 'https://github.com/adith005/rag-knowledge-engine',
        demo_url: '',
      },
      {
        id: '4',
        title: 'Pandemic Spread Simulator & Dynamic Predictor',
        tech_stack: 'Python, Neural Networks, GAMA Platform',
        description: 'Trained neural networks on initial epidemiological data and built spatial visualizations within the GAMA agent-based simulation framework.',
        github_url: 'https://github.com/adith005/pandemic-spread-simulator',
        demo_url: '',
      },
      {
        id: '5',
        title: 'Library Management & Data System',
        tech_stack: 'Python, MySQL',
        description: 'Constructed a full-stack relational database management system using Python and SQL to handle inventory, user activity, and transaction tracking.',
        github_url: 'https://github.com/adith005/library-management-system',
        demo_url: '',
      },
    ];
  }
}

export async function fetchExperienceFromCSV(): Promise<Experience[]> {
  try {
    if (typeof window === 'undefined') {
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'public', 'data', 'experience.csv');
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return parseCSV<Experience>(fileContent);
      }
    }

    const response = await fetch('/data/experience.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch experience.csv: ${response.statusText}`);
    }
    const csvText = await response.text();
    return parseCSV<Experience>(csvText);
  } catch (error) {
    console.error('Error loading experience CSV:', error);
    return [
      {
        id: '1',
        role: 'Software Developer Intern',
        company: 'Hound Mobility',
        period: 'June 2026 – Present',
        description: 'Built an intelligent site-feasibility platform integrating Google Maps API to extract geospatial data and evaluate locations for EV charging stations. Designed and integrated a weighted deterministic AI model to score station success metrics, reducing manual evaluation cycles.',
      },
      {
        id: '2',
        role: 'NLP & Data Engineering Intern',
        company: 'AGH Advisors',
        period: 'June 2025 – June 2025',
        description: 'Automated news extraction from Google News and implemented NLP sentiment analysis pipelines to classify market sentiment dynamically. Engineered an OCR and document intelligence engine parsing scanned PDFs to analyze and categorize exam questions according to Bloom’s Taxonomy.',
      },
    ];
  }
}

export async function fetchEducationFromCSV(): Promise<Education[]> {
  try {
    if (typeof window === 'undefined') {
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'public', 'data', 'education.csv');
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return parseCSV<Education>(fileContent);
      }
    }

    const response = await fetch('/data/education.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch education.csv: ${response.statusText}`);
    }
    const csvText = await response.text();
    return parseCSV<Education>(csvText);
  } catch (error) {
    console.error('Error loading education CSV:', error);
    return [
      {
        id: '1',
        qualification: 'B.Tech in Artificial Intelligence & Data Science',
        place: "St. Joseph's College of Engineering and Technology (SJCET)",
        location: 'Palai',
        marks: 'CGPA: 7.02/10',
        period: '2022 – 2026',
        description: 'Specialization in Machine Learning, Deep Learning, RAG Pipelines & Computer Vision. Developed projects in edge computing and LLM optimization.',
      },
      {
        id: '2',
        qualification: 'Higher Secondary (Grade 12)',
        place: 'Chavara CMI Public School',
        location: 'Palai',
        marks: '74%',
        period: '2020 – 2022',
        description: 'Focused on Computer Science, Mathematics, Physics, and Chemistry.',
      },
      {
        id: '3',
        qualification: 'High School (Grade 10)',
        place: 'St. Vincent CMI Residential School',
        location: 'Palai',
        marks: '81%',
        period: '2020',
        description: 'Strong foundation in Science, Mathematics, and Computer Fundamentals.',
      },
    ];
  }
}

export async function fetchPublicationsFromCSV(): Promise<Publication[]> {
  try {
    if (typeof window === 'undefined') {
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'public', 'data', 'publication.csv');
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return parseCSV<Publication>(fileContent);
      }
    }

    const response = await fetch('/data/publication.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch publication.csv: ${response.statusText}`);
    }
    const csvText = await response.text();
    return parseCSV<Publication>(csvText);
  } catch (error) {
    console.error('Error loading publication CSV:', error);
    return [
      {
        id: 'pub-01',
        name: 'Pandemic Simulation Using PINN Model in GAMA Platform',
        link: 'https://ieeexplore.ieee.org/document/11408973',
        description: '29th IEEE Scopus Conference Paper from the Department of Artificial Intelligence & Data Science. Explores Physics-Informed Neural Networks (PINNs) combined with the GAMA platform for modeling complex epidemiological dynamics.',
        authors: 'Aaron Johns; Adith Abhilash; Annu Jaison; Pooja Shibu; Rashmi Annamma George',
        publisher: 'IEEE',
        year: '2025',
        conference: '2025 1st International Conference on Smart and Intelligent Systems (SISCON)',
      },
    ];
  }
}
