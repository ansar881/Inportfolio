import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">Ansar Khan</span>
            </h1>
            <h2 class="hero-subtitle">Angular Developer</h2>
            <p class="hero-description">
              Results-oriented Angular Developer with expertise in building responsive,
              dynamic and scalable web and mobile applications using Angular and Ionic
              framework. Passionate about continuous learning and delivering impactful
              solutions that exceed expectations.
            </p>
            <div class="hero-buttons">
              <a href="#contact" class="btn btn-primary">Get In Touch</a>
              <a href="#projects" class="btn btn-secondary">View Projects</a>
            </div>
            <div class="hero-contact">
              <a href="mailto:anoansarkhan@gmail.com" class="contact-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                anoansarkhan&#64;gmail.com
              </a>
              <a href="tel:+919861062015" class="contact-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 9861062015
              </a>
              <span class="contact-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Korai, Jajpur, Odisha 755022
              </span>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-placeholder">
              <!-- <svg viewBox="0 0 200 200" class="avatar-svg">
                <circle cx="100" cy="100" r="95" fill="#e0e7ff"/>
                <circle cx="100" cy="80" r="35" fill="#2563eb"/>
                <path d="M 40 170 Q 100 130 160 170" fill="#2563eb"/>
              </svg> -->
              <img src="/assets/AnsarKhan_pass_photo.jpg" alt="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
      padding-top: 80px;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      width: 100%;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-text {
      animation: fadeInUp 0.8s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .highlight {
      color: #2563eb;
      position: relative;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: #059669;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    .hero-description {
      font-size: 1.1rem;
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.875rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: #2563eb;
      color: white;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
    }

    .btn-primary:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #2563eb;
      border: 2px solid #2563eb;
    }

    .btn-secondary:hover {
      background: #2563eb;
      color: white;
      transform: translateY(-2px);
    }

    .hero-contact {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #4b5563;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: #2563eb;
    }

    .icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      animation: fadeInRight 0.8s ease-out;
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .image-placeholder {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: white;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }

    .image-placeholder:hover {
      transform: scale(1.05);
    }

    .image-placeholder img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .avatar-svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 968px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-image {
        order: -1;
      }

      .image-placeholder {
        width: 250px;
        height: 250px;
      }
    }

    @media (max-width: 640px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn {
        text-align: center;
      }

      .image-placeholder {
        width: 200px;
        height: 200px;
      }
    }
  `]
})
export class HeroComponent {}
