import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience">
      <div class="experience-container">
        <h2 class="section-title">Professional Experience</h2>
        <p class="section-subtitle">My journey as an Angular Developer</p>

        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experiences; let i = index" [class.current]="i === 0">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="experience-header">
                <div>
                  <h3 class="company">{{ exp.company }}</h3>
                  <h4 class="role">{{ exp.role }}</h4>
                </div>
                <div class="experience-meta">
                  <span class="period">{{ exp.period }}</span>
                  <span class="location">{{ exp.location }}</span>
                </div>
              </div>
              <ul class="highlights">
                <li *ngFor="let highlight of exp.highlights">{{ highlight }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      padding: 6rem 2rem;
      background: #f9fafb;
    }

    .experience-container {
      max-width: 1000px;
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
      margin-bottom: 4rem;
    }

    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, #2563eb, #059669);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 2rem;
    }

    .timeline-marker {
      position: absolute;
      left: -2.5rem;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      border: 3px solid #2563eb;
      transition: all 0.3s ease;
    }

    .timeline-item.current .timeline-marker {
      background: #2563eb;
      box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.2);
    }

    .timeline-item:hover .timeline-marker {
      transform: scale(1.3);
      box-shadow: 0 0 0 8px rgba(37, 99, 235, 0.15);
    }

    .timeline-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .timeline-item:hover .timeline-content {
      transform: translateX(10px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.5rem;
      gap: 1rem;
    }

    .company {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
    }

    .role {
      font-size: 1.1rem;
      font-weight: 600;
      color: #2563eb;
      margin: 0;
    }

    .experience-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
      flex-shrink: 0;
    }

    .period {
      font-weight: 600;
      color: #059669;
      font-size: 0.95rem;
    }

    .location {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .highlights {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .highlights li {
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      position: relative;
      color: #4b5563;
      line-height: 1.6;
    }

    .highlights li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .experience {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .timeline {
        padding-left: 1.5rem;
      }

      .timeline-item {
        padding-left: 1.5rem;
      }

      .experience-header {
        flex-direction: column;
      }

      .experience-meta {
        align-items: flex-start;
      }

      .company {
        font-size: 1.25rem;
      }

      .timeline-content {
        padding: 1.5rem;
      }
    }
  `]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'AJA Consulting Services LLP',
      role: 'Angular Developer – Keypoint Technology',
      period: 'Dec 2025 – Present',
      location: 'Hyderabad, India',
      highlights: [
        'Developing a large-scale government web application using Angular 21, implementing advanced features like bulk CSV and XLSX upload/download, dynamic dashboards and secure form workflows within a strict compliance framework.',
        'Developed a performant SPA using modular and reusable components, lazy loading, standalone APIs and Signals, integrated RESTful APIs, optimized state management with RxJS and ensured responsiveness in an Agile/Scrum environment.'
      ]
    },
    {
      company: 'Wings Infonet Private Limited',
      role: 'Angular Developer',
      period: 'Feb 2023 – April 2025',
      location: 'Hyderabad, India',
      highlights: [
        'Developed ERP-based application on Finance, Sales, Inventory and Tax (GST/CGST/SGST/IGST) using Angular for dynamic SPAs and Ionic for cross-platform mobile apps, ensuring compliance and data integrity.',
        'Leveraged RESTful APIs and modular development within the SDLC to build scalable, high-performance applications, while conducting rigorous debugging, unit testing and bug-fixing to enhance stability.',
        'Collaborated with cross-functional teams to deliver seamless implementation, maintaining flexible, maintainable and well-integrated systems end-to-end.'
      ]
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Angular Developer Trainee',
      period: 'Feb 2022 – Sept 2022',
      location: 'Kolkata, India',
      highlights: [
        'Developed dynamic UIs with Angular and complex Reactive Forms with custom validators.',
        'Implemented component communication using @Input/@Output and shared services and integrated RESTful APIs with HttpClient for CRUD operations.',
        'Dynamic data operations like filtering, sorting, and real-time UI interactions. Enhanced performance and maintainability through Angular Routing and Lazy Loading for a modular application structure.'
      ]
    }
  ];
}
