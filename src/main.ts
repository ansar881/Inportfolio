import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { EducationComponent } from './components/education.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <div class="portfolio">
      <nav class="navbar">
        <div class="nav-container">
          <a href="#home" class="logo">AK</a>
          <div class="hamburger" [class.active]="menuOpen" (click)="toggleMenu()">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6" class="hamburger-line hamburger-line-1"></line>
              <line x1="3" y1="12" x2="21" y2="12" class="hamburger-line hamburger-line-2"></line>
              <line x1="3" y1="18" x2="21" y2="18" class="hamburger-line hamburger-line-3"></line>
            </svg>
          </div>
          <ul class="nav-menu" [class.active]="menuOpen">
            <li><a href="#home" class="nav-link" [class.active]="activeSection === 'home'" (click)="toggleMenu()">Home</a></li>
            <li><a href="#skills" class="nav-link" [class.active]="activeSection === 'skills'" (click)="toggleMenu()">Skills</a></li>
            <li><a href="#experience" class="nav-link" [class.active]="activeSection === 'experience'" (click)="toggleMenu()">Experience</a></li>
            <li><a href="#projects" class="nav-link" [class.active]="activeSection === 'projects'" (click)="toggleMenu()">Projects</a></li>
            <li><a href="#education" class="nav-link" [class.active]="activeSection === 'education'" (click)="toggleMenu()">Education</a></li>
            <li><a href="#contact" class="nav-link" [class.active]="activeSection === 'contact'" (click)="toggleMenu()">Contact</a></li>
            <li>
              <a class="res-down"
              (click)="downloadResume(); toggleMenu()">
               Download Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <app-hero id="home"></app-hero>
      <app-skills id="skills"></app-skills>
      <app-experience id="experience"></app-experience>
      <app-projects id="projects"></app-projects>
      <app-education id="education"></app-education>
      <app-contact id="contact"></app-contact>

      <footer class="footer">
        <p>&copy; Ansar Khan. All rights reserved.</p>
      </footer>
    </div>
  `,
  styles: [`
    .portfolio {
      min-height: 100vh;
    }

    .res-down{
      cursor: pointer;
      background-color: #2563eb;
      color: white;
      padding: 0.8rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
    }

    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2563eb;
      text-decoration: none;
      transition: transform 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.1);
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .hamburger {
      display: none;
      cursor: pointer;
      z-index: 1100;
      background: none;
      border: none;
      padding: 4px;
      color: #2563eb;
      transition: all 0.3s ease;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .hamburger:hover {
      color: #1d4ed8;
      transform: scale(1.05);
    }

    .hamburger svg {
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      overflow: visible;
    }

    .hamburger-line {
      transform-origin: center;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hamburger.active .hamburger-line-1 {
      transform: rotate(45deg) translateY(6px);
    }

    .hamburger.active .hamburger-line-2 {
      opacity: 0;
      transform: translateX(0);
    }

    .hamburger.active .hamburger-line-3 {
      transform: rotate(-45deg) translateY(-6px);
    }

    .nav-link {
      color: #374151;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #2563eb;
      transition: width 0.3s ease;
    }

    .nav-link:hover {
      color: #2563eb;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-link.active {
      color: #2563eb;
      background-color: rgba(37, 99, 235, 0.15);
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
    }

    .nav-link.active::after {
      display: none;
    }

    .footer {
      background: #1f2937;
      color: #fff;
      text-align: center;
      padding: 2rem;
      margin-top: 4rem;
    }

    .footer p {
      margin: 0;
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: absolute;
        top: 70px;
        left: -100%;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.99);
        width: 100%;
        text-align: center;
        transition: left 0.3s ease;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
        gap: 0;
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-menu li {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }

      .nav-menu li:last-child {
        border-bottom: none;
      }

      .hamburger {
        display: flex;
      }

      .nav-container {
        padding: 1rem;
      }

      .logo {
        font-size: 1.3rem;
      }

      .res-down {
        display: inline-block;
        margin-top: 0.5rem;
      }
    }

    @media (max-width: 480px) {
      .nav-container {
        padding: 0.8rem;
      }

      .logo {
        font-size: 1.1rem;
      }

      .nav-menu {
        top: 60px;
      }

      .navbar {
        position: fixed;
      }
    }
  `]
})
export class App {
  menuOpen = false;
  activeSection = 'home';

  constructor() {
    this.setupScrollListener();
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            this.activeSection = section;
            break;
          }
        }
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Ansar_Khan.pdf';
    link.download = 'Ansar_Khan.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

bootstrapApplication(App);
