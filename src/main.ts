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
          <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#education" class="nav-link">Education</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
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
        <p>&copy; 2026 Ansar Khan. All rights reserved.</p>
      </footer>
    </div>
  `,
  styles: [`
    .portfolio {
      min-height: 100vh;
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
        gap: 1rem;
        font-size: 0.9rem;
      }

      .nav-container {
        padding: 1rem;
      }
    }
  `]
})
export class App {}

bootstrapApplication(App);
