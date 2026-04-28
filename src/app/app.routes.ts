import { Routes } from '@angular/router';
import { ListeningTest } from './modules/listening/listening-test/listening-test';
import { ReadingTest } from './modules/reading/reading-test/reading-test';
import { WritingTest } from './modules/writing/writing-test/writing-test';
import { SpeakingTest } from './modules/speaking/speaking-test/speaking-test';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: 'reading', component: ReadingTest },
            { path: 'listening', component: ListeningTest },
            { path: 'writing', component: WritingTest },
            { path: 'speaking', component: SpeakingTest },
            { path: '', redirectTo: 'reading', pathMatch: 'full' },
        ]
    }
];