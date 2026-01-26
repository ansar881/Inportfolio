import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact">
      <div class="contact-container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Feel free to reach out for collaborations or opportunities</p>

        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="info-title">Contact Information</h3>
            <p class="info-description">
              I'm currently available for freelance work and full-time opportunities.
              If you have a project that you want to get started, think you need my help
              with something or just fancy saying hey, then get in touch.
            </p>

            <div class="contact-details">
              <a [href]="contact.link" class="contact-item" *ngFor="let contact of contactInfo"
                 [target]="contact.link.startsWith('http') ? '_blank' : '_self'">
                <div class="contact-icon" [innerHTML]="contact.icon"></div>
                <div class="contact-text">
                  <div class="contact-label">{{ contact.label }}</div>
                  <div class="contact-value">{{ contact.value }}</div>
                </div>
              </a>
            </div>

            <div class="personal-info">
              <h4 class="personal-info-title">Personal Details</h4>
              <div class="personal-grid">
                <div class="personal-item">
                  <span class="personal-label">Date of Birth:</span>
                  <span class="personal-value">15th March 1998</span>
                </div>
                <div class="personal-item">
                  <span class="personal-label">Gender:</span>
                  <span class="personal-value">Male</span>
                </div>
                <div class="personal-item">
                  <span class="personal-label">Marital Status:</span>
                  <span class="personal-value">Unmarried</span>
                </div>
                <div class="personal-item">
                  <span class="personal-label">Nationality:</span>
                  <span class="personal-value">Indian</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-cta">
            <div class="cta-card">
              <h3 class="cta-title">Let's Work Together</h3>
              <p class="cta-description">
                I'm passionate about creating exceptional web applications and
                always interested in hearing about new projects and opportunities.
              </p>

              <div class="cta-buttons">
                <a href="mailto:anoansarkhan@gmail.com" class="cta-button primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Send Email
                </a>
                <a href="tel:+919861062015" class="cta-button secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Me
                </a>
              </div>

              <div class="availability">
                <div class="availability-indicator"></div>
                <span>Currently available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 2rem;
      background: white;
    }

    .contact-container {
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .info-description {
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f9fafb;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .contact-item:hover {
      background: #e0e7ff;
      transform: translateX(5px);
    }

    .contact-icon {
      width: 40px;
      height: 40px;
      background: #2563eb;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .contact-icon svg {
      width: 20px;
      height: 20px;
      stroke: white;
    }

    .contact-text {
      flex: 1;
    }

    .contact-label {
      font-size: 0.85rem;
      color: #6b7280;
      margin-bottom: 0.25rem;
    }

    .contact-value {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
    }

    .personal-info {
      background: #f9fafb;
      padding: 1.5rem;
      border-radius: 12px;
    }

    .personal-info-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
    }

    .personal-grid {
      display: grid;
      gap: 0.75rem;
    }

    .personal-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #e5e7eb;
    }

    .personal-item:last-child {
      border-bottom: none;
    }

    .personal-label {
      color: #6b7280;
      font-weight: 500;
    }

    .personal-value {
      color: #1f2937;
      font-weight: 600;
    }

    .contact-cta {
      display: flex;
      align-items: center;
    }

    .cta-card {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(37, 99, 235, 0.3);
      width: 100%;
    }

    .cta-title {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }

    .cta-description {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .cta-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .cta-button svg {
      width: 20px;
      height: 20px;
    }

    .cta-button.primary {
      background: white;
      color: #2563eb;
    }

    .cta-button.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
    }

    .cta-button.secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .cta-button.secondary:hover {
      background: white;
      color: #2563eb;
      transform: translateY(-2px);
    }

    .availability {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: white;
      font-weight: 500;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .availability-indicator {
      width: 12px;
      height: 12px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      50% {
        opacity: 0.8;
        box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
      }
    }

    @media (max-width: 968px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .contact-cta {
        order: -1;
      }
    }

    @media (max-width: 640px) {
      .contact {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .cta-card {
        padding: 2rem;
      }

      .cta-title {
        font-size: 1.5rem;
      }

      .personal-item {
        flex-direction: column;
        gap: 0.25rem;
      }
    }
  `]
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
      label: 'Email',
      value: 'anoansarkhan@gmail.com',
      link: 'mailto:anoansarkhan@gmail.com'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
      label: 'Phone',
      value: '+91 9861062015',
      link: 'tel:+919861062015'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      label: 'Location',
      value: 'Korai, Jajpur, Odisha 755022',
      link: 'https://maps.google.com/?q=Korai,Jajpur,Odisha'
    }
  ];
}
