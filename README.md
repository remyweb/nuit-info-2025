Concept Général
La Mission est un jeu éducatif interactif qui sensibilise les utilisateurs à la souveraineté numérique et au logiciel libre. Le joueur explore une carte interactive d'un lycée et doit aider les personnages à résoudre leurs problèmes informatiques.

LEs Personnages (NPCs)
5 personnages avec des noms façon "Astérix" :

Personnage	Rôle	Problème	Points
Prof	Enseignant	Mises à jour Windows intempestives	15 pts
Curiosix	Étudiant	Code source inaccessible (logiciel propriétaire)	15 pts
Économix	Intendant	Budget licences épuisé (10 000€)	20 pts
Paniquix	Directrice	Obsolescence programmée (50 PC "trop vieux" pour Windows 11)	25 pts
Sysadminix	Admin système	Virus et réinstallations constantes	20 pts

Système de Dialogues
Chaque interaction suit ce schéma :

NPC expose son problème
Trombony (parodie de Clippy) propose une "solution" absurde et coûteuse 📎
Tux (le pingouin Linux) explique l'alternative libre
Choix du joueur : solution propriétaire (échec) vs solution libre (succès + points)

Progression
Score de souveraineté : max 95 points (15+15+20+25+20)
Barre de progression visible en haut de l'écran
Victoire quand tous les marqueurs sont résolus

![cover](.github/assets/stack.png)


Nuit et Jour is our stack made for the [Nuit de l'info](https://www.nuitdelinfo.com/) 

## Stack

- **Monorepo Structure**: Organized as a workspaces-based monorepo with Turbo for build orchestration
- **Modern Stack**:
  - [Bun](https://bun.sh) as the JavaScript runtime and package manager
  - [Hono](https://hono.dev) as the backend framework
  - [Vite](https://vitejs.dev) for frontend bundling
  - [React](https://react.dev) for the frontend UI
  - [Turbo](https://turbo.build) for monorepo build orchestration and caching

## Getting Started

### Installation

```bash
# Install dependencies for all workspaces
bun install
```

### Development

```bash
# Run all workspaces in development mode with Turbo
bun run dev

# Or run individual workspaces directly
bun run dev:client    # Run the Vite dev server for React
bun run dev:server    # Run the Hono backend
```

### Building

```bash
# Build all workspaces with Turbo
bun run build

# Or build individual workspaces directly
bun run build:client  # Build the React frontend
bun run build:server  # Build the Hono backend
```

### Additional Commands

```bash
# Lint all workspaces
bun run lint

# Type check all workspaces
bun run type-check

# Run tests across all workspaces
bun run test
```
