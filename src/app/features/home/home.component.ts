import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '@features/about/components/smart/about.component';
import { ExperienceComponent } from '@features/experience/components/smart/experience.component';
import { HeroComponent } from '@features/hero/components/smart/hero.component';
import { ProjectsComponent } from '@features/projects/components/smart/projects.component';
import { SkillsComponent } from '@features/skills/components/smart/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-projects />
  `,
})
export class HomeComponent { }
