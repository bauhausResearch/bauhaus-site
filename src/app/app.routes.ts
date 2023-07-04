import { Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ShowcasePageComponent } from './showcase-page/showcase-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';

export const routes: Routes = [
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path: 'showcase',
      component: ShowcasePageComponent
    },
    {
        path: 'privacy',
        component: PrivacyPageComponent
    },
    {
        path: 'terms',
        component: TermsPageComponent
    },
    {
        path: 'cookies',
        component: CookiesPolicyComponent
    },
    {
        path: 'about',
        component: AboutUsPageComponent
    },
    {
        path: 'careers',
        component: CareersPageComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ];
