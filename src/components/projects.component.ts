import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="projects-container">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Showcasing my best work and contributions</p>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-header">
              <h3 class="project-name">{{ project.name }}</h3>
              <a *ngIf="project.link" [href]="project.link" target="_blank" class="project-link" title="View Project">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <ul class="project-highlights">
              <li *ngFor="let highlight of project.highlights">{{ highlight }}</li>
            </ul>
            <div class="project-technologies">
              <span class="tech-badge" *ngFor="let tech of project.technologies">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 6rem 2rem;
      background: white;
    }

    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      text-align: center;
      color: #6b7280;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 2rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
      border-color: #2563eb;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .project-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
      flex: 1;
    }

    .project-link {
      color: #2563eb;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    .project-link:hover {
      transform: translateX(3px) translateY(-3px);
      color: #1d4ed8;
    }

    .project-link svg {
      width: 100%;
      height: 100%;
    }

    .project-description {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .project-highlights {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem 0;
      flex: 1;
    }

    .project-highlights li {
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      position: relative;
      color: #4b5563;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .project-highlights li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #059669;
      font-weight: bold;
    }

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: auto;
    }

    .tech-badge {
      background: white;
      color: #2563eb;
      padding: 0.375rem 0.875rem;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid #bfdbfe;
      transition: all 0.3s ease;
    }

    .tech-badge:hover {
      background: #2563eb;
      color: white;
      border-color: #2563eb;
    }

    @media (max-width: 640px) {
      .projects {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Sahaj Gail',
      description: 'Unified Customer Management System',
      highlights: [
        'Developing role-based Unified Customer Management System for PNG/CNG customers & partners, covering onboarding, billing, CRM, DRM and admin modules using Angular 21.',
        'Implementing RESTful APIs with adaptors using HTTP Clients, lazy loading, RxJS, reusable component and Bootstrap for a modular, scalable and optimized frontend architecture.'
      ],
      technologies: ['Angular 21', 'TypeScript', 'JavaScript', 'RxJS', 'HTML', 'CSS/SCSS',
         'Bootstrap', 'RESTful APIs', 'Git & Gitea', 'XLSX']
    },
    {
      name: 'Wings ERP',
      description: 'Product Sales and Purchases with Finance and Stock Management',
      highlights: [
        'Developed ERP application to manage sales, purchases, inventory and finance, implementing full CRUD operations by integrating RESTful APIs with Angular HTTP client and RxJS.',
        'Built responsive, reusable UIs with Directives and Pipes, configured routing with lazy loading and managed state via @Input/@Output, Services and Reactive Forms.',
        'Enabling transaction, report and master data management with a focus on performance and code reusability.'
      ],
      technologies: ['Angular', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'CSS/SCSS',
         'RxJS', 'RESTful APIs', 'Tailwind CSS', 'BitBucket', 'Git', 'XLSX']
    },
    {
      name: 'ApnaaGhar',
      description: 'Real estate search buy sell and rent',
      highlights: [
        'Designed and developed ApnaaGhar application, a real estate platform using Angular 18, enabling users to buy, rent or explore PG, commercial and project listings.',
        'Implemented location-based search, authentication (login, sign-up, logout) with reactive form validation, property filtering and detailed property views for enhanced user experience.',
        'Optimized performance using lazy-loading and built a responsive UI leveraging the PrimeNG library.'
      ],
      technologies: ['Angular 18', 'PrimeNG', 'TypeScript', 'JavaScript', 'Reactive Forms', 'Git & GitHub'],
      link: 'https://ansar881.github.io/ApnaaGhar/'
    }
  ];
}
