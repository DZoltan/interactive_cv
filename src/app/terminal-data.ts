export interface TerminalSection {
  id: string;
  label: string;
  command: string;
  output: Record<string, unknown>;
}

export const TERMINAL_SECTIONS: TerminalSection[] = [
  {
    id: 'me',
    label: 'About me (/api/me)',
    command: "curl --user zltnd:pass -H 'Accept: application/json' -s localhost:8080/api/v1/me",
    output: {
      name: 'Zoltán Dobos',
      email: 'zoltan.dobos@telekom.com',
      mobile: '+36301357373',
      current_location: 'Debrecen',
      current_position: 'Developer (mostly backend)'
    },
  },
  {
    id: 'education',
    label: 'Education (/api/education)',
    command:
      "curl --user zltnd:pass -H 'Accept: application/json' -s localhost:8080/api/v1/education",
    output: {
      Middle_school: { 
          name: 'Andrássy György Catholic Economy School and College, Eger',
          info: 'Bilingual specialization for tourism, based on the German language',
          years: '2012-2017'
        },
      University: {
          name: 'University of Debrecen, Faculty of Informatics',
          info: 'Computer Science BsC (Software development)',
          years: '2019-2022'
        },
    },
  },
  {
    id: 'jobs',
    label: 'Work experience (/api/jobs)',
    command: "curl --user zltnd:pass -H 'Accept: application/json' -s localhost:8080/api/v1/jobs",
    output: {
      jobs: [ 
      {
        role: 'Network Support Assistance - Trainee',
        company: 'Deustche Telekom ITTC Kft.',
        years: '2018- 2022',
        network_activites: 'The job consists of support for network infrastructure of DTAG, proactive and reactive system management. Supporting on-site work while keeping the monitoring system database up to date.',
        developer_activites: 'PHP based development under Laravel framework to create a database support webpage for daily usage by our team. Participation in SCRUMs and meetings of project, working with DevOPS colleagues.'
      },
      {
        role: 'Network Administrator',
        company: 'Deustche Telekom ITTC Kft.',
        years: '2022',
        network_activites: 'Maintenance of the network infrastructure, maintenance of the correct operation of devices, implementation of necessary configuration changes.',
        developer_activites: 'I continued the development of the website from my previous job. Development of automation software in Python to simplify modifications to network devices.'
      },
      {
        role: 'Developer',
        company: 'Deustche Telekom ITTC Kft.',
        years: '2022 - ongoing',
        projects: [
          {
            project_name: 'Project NetzDB – Service Hub NETS',
            description: 'My task in this project was to develop the complete backend system of the application. The most used technology was the <b>Spring Boot</b>, first time our database was <b>MariaDB</b>, but due the flexibility and scalability of the database, we switched to <b>MongoDB</b>. During my work I had to create REST APIs for our Frontend, implement security technologies such as JWT, BCrypt, etc. Also, I had to understand <b>VUE.JS</b> code as our frontend technology. As part of the project, I worked with TARDIS, our internal API Gateway.'
          },
          {
            project_name: 'Project Icinga On-call Service',
            description: 'I am working on an automation service to support network monitoring colleagues, mainly in <b>Python</b>. This requires not only programming skills, but also communication with sub teams. On this project, transparent code structure and full adherence to programming principles are important to me. I had to make numerous design decisions and trade-offs regarding distributed systems, as stability was of paramount importance for this project.'
          }
        ]
      }
    ]
    },
  },
  {
    id: 'skills',
    label: 'Job related skills (/api/skills)',
    command: "curl --user zltnd:pass -H 'Accept: application/json' -s localhost:8080/api/v1/skills",
    output: {
      programming_languages: ['C (1/5)', 'C++ (1/5)', 'C# (2/5)', 'PHP (2.5/5)', 'Python (3.5/5)', 'Javascript (3.5/5)', 'Java (4/5)'],
      database_technologies: ['SQL (PSQL, MariaDB)','NoSQL (MongoDB)'],
      known_frameworks: ['Spring Boot (Java)', 'VUE.js (JS)', 'FastAPI (Python)'],
      methodologies: ['Kanban', 'Scrum', 'SaFe', 'DSDM'],
      operation_systems: ['Windows, Debian based linux systems'],
      version_control : true,
      languages: [
        {
          'German' : 'active B2 (with C1 exam)',
          'English' : 'B1-B2',
          "Hungarian" : 'native'
        }
      ]
    },
  },
  {
    id: 'hobbies',
    label: 'Hobbies (/api/hobbies)',
    command: "curl --user zltnd:pass -H 'Accept: application/json' -s localhost:8080/api/hobbies",
    output: {
      note: 'This Endpoint is under development.',
    },
  },
];
