import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills">
      <div class="skills-container">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>

        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of categories">
            <h3 class="category-title">{{ category.name }}</h3>
            <div class="skill-tags">
              <span class="skill-tag" *ngFor="let skill of category.skills">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="soft-skills-section">
          <h3 class="category-title">Soft Skills</h3>
          <div class="soft-skills-grid">
            <div class="soft-skill-card" *ngFor="let skill of softSkills">
              <div class="skill-icon">✓</div>
              <p>{{ skill }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 6rem 2rem;
      background: white;
    }

    .skills-container {
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .skill-category {
      background: #f9fafb;
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      transition: all 0.3s ease;
    }

    .skill-category:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-color: #2563eb;
    }

    .category-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 1rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-tag {
      background: white;
      color: #374151;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid #e5e7eb;
      transition: all 0.3s ease;
      cursor: default;
    }

    .skill-tag:hover {
      background: #2563eb;
      color: white;
      border-color: #2563eb;
      transform: scale(1.05);
    }

    .soft-skills-section {
      margin-top: 3rem;
    }

    .soft-skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .soft-skill-card {
      background: #f0f9ff;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid #bae6fd;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.3s ease;
    }

    .soft-skill-card:hover {
      transform: translateX(5px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
    }

    .skill-icon {
      width: 32px;
      height: 32px;
      background: #2563eb;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }

    .soft-skill-card p {
      margin: 0;
      color: #1e40af;
      font-weight: 500;
    }

    @media (max-width: 640px) {
      .skills {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .soft-skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  categories = [
    {
      name: 'Frontend Development',
      skills: ['Angular', 'Angular CLI', 'TypeScript', 'JavaScript', 'HTML', 'CSS/SCSS', 'RxJS']
    },
    {
      name: 'Mobile Development',
      skills: ['Ionic', 'Cross-platform Apps']
    },
    {
      name: 'UI Frameworks & Libraries',
      skills: ['Angular Material', 'PrimeNG', 'DevExtreme', 'Tailwind CSS', 'Bootstrap', 'Font Awesome']
    },
    {
      name: 'Tools & Utilities',
      skills: ['Git', 'Gitea', 'GitHub', 'Visual Studio Code', 'Postman', 'XLSX', 'Jira']
    },
    {
      name: 'Development Practices',
      skills: ['Unit Testing', 'Debugging', 'Agile', 'RESTful APIs']
    }
  ];

  softSkills = [
    'Effective Communication',
    'Problem Solving Ability',
    'Time Management',
    'Critical Thinking',
    'Team Work',
    'Collaboration with Cross-Functional Teams'
  ];
}
