import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="education">
      <div class="education-container">
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">Academic background and achievements</p>

        <div class="education-grid">
          <div class="education-card" *ngFor="let edu of educations">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div class="card-content">
              <h3 class="degree">{{ edu.degree }}</h3>
              <h4 class="institution">{{ edu.institution }}</h4>
              <div class="education-meta">
                <span class="period">{{ edu.period }}</span>
                <span class="location">{{ edu.location }}</span>
              </div>
              <div class="score">{{ edu.score }}</div>
            </div>
          </div>
        </div>

        <div class="achievements">
          <h3 class="achievements-title">Achievements</h3>
          <div class="achievement-card">
            <div class="achievement-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div>
              <h4 class="achievement-name">National Qualifier Test (NQT)</h4>
              <p class="achievement-issuer">TCS iON, Oct-2020</p>
            </div>
          </div>
        </div>

        <div class="languages">
          <h3 class="languages-title">Languages</h3>
          <div class="language-tags">
            <span class="language-tag" *ngFor="let lang of languages">{{ lang }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education {
      padding: 6rem 2rem;
      background: #f9fafb;
    }

    .education-container {
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

    .education-grid {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .education-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      display: flex;
      gap: 1.5rem;
      transition: all 0.3s ease;
    }

    .education-card:hover {
      transform: translateX(10px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .card-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .card-icon svg {
      width: 32px;
      height: 32px;
      color: white;
    }

    .card-content {
      flex: 1;
    }

    .degree {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 0.5rem 0;
    }

    .institution {
      font-size: 1rem;
      font-weight: 600;
      color: #2563eb;
      margin: 0 0 0.75rem 0;
    }

    .education-meta {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 0.75rem;
    }

    .period {
      color: #059669;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .location {
      color: #6b7280;
      font-size: 0.95rem;
    }

    .score {
      background: #f0f9ff;
      color: #1e40af;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      display: inline-block;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .achievements, .languages {
      margin-top: 3rem;
    }

    .achievements-title, .languages-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .achievement-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      display: flex;
      gap: 1.5rem;
      align-items: center;
      transition: all 0.3s ease;
    }

    .achievement-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .achievement-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .achievement-icon svg {
      width: 32px;
      height: 32px;
      color: white;
    }

    .achievement-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 0.25rem 0;
    }

    .achievement-issuer {
      color: #6b7280;
      margin: 0;
      font-size: 0.95rem;
    }

    .language-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .language-tag {
      background: white;
      color: #1f2937;
      padding: 0.75rem 1.5rem;
      border-radius: 24px;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .language-tag:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      background: #2563eb;
      color: white;
    }

    @media (max-width: 640px) {
      .education {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .education-card, .achievement-card {
        flex-direction: column;
        text-align: center;
      }

      .card-icon, .achievement-icon {
        margin: 0 auto;
      }

      .education-meta {
        flex-direction: column;
        gap: 0.5rem;
      }

      .language-tags {
        justify-content: center;
      }
    }
  `]
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Bachelor of Science in Physics (Hons)',
      institution: 'Chitalo Degree Mohavidyalaya',
      period: 'Oct 2016 – July 2019',
      location: 'Odisha, India',
      score: 'CGPA: 7.20'
    },
    {
      degree: 'HSE | Science (PCMB)',
      institution: 'V.N Autonomous College',
      period: 'June 2014 – May 2016',
      location: 'Odisha, India',
      score: 'Percentage: 55.17%'
    },
    {
      degree: 'High School',
      institution: 'Radharaman High School',
      period: '2014',
      location: 'Odisha, India',
      score: 'Percentage: 74.67%'
    }
  ];

  languages: string[] = ['English', 'Hindi', 'Odia', 'Urdu'];
}
