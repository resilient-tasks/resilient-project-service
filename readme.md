project-service/
├── src/
│   ├── application/              # Casos de uso / lógica de aplicación
│   │   ├── usecases/
│   │   │   ├── createProject.ts
│   │   │   ├── getProjects.ts
│   │   │   ├── getProjectById.ts
│   │   │   ├── deleteProject.ts
│   │   │   └── updateProject.ts
│   │   └── services/             # Reglas de negocio compartidas (si aplica)
│
│   ├── domain/                   # Entidades y reglas del dominio
│   │   ├── Project.ts
│   │   └── ProjectRepository.ts  # Interface de repositorio
│
│   ├── infrastructure/
│   │   ├── db/
│   │   │   ├── mongoose/         # Adaptador para MongoDB
│   │   │   │   ├── models/       # Schemas de mongoose
│   │   │   │   │   └── ProjectModel.ts
│   │   │   │   └── ProjectMapper.ts
│   │   │   └── ProjectRepositoryImpl.ts
│   │   ├── events/               # Publicadores de eventos (ej: ProjectDeleted)
│   │   │   └── ProjectEventPublisher.ts
│   │   └── http/                 # Adaptadores de Express
│   │       ├── controllers/
│   │       │   └── projectController.ts
│   │       ├── routes/
│   │       │   └── projectRoutes.ts
│   │       └── middlewares/
│   │           └── authenticateJWT.ts
│
│   ├── config/                   # Variables de entorno y configuración
│   │   └── index.ts
│
│   ├── index.ts                  # Punto de entrada (servidor Express)
│
├── .env
├── Dockerfile
├── docker-compose.yml           # Opcional si corre con Mongo u otros deps
├── tsconfig.json
├── package.json
└── README.md
