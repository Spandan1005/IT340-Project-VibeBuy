import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-quiz',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
    currentStep = 1;
    totalSteps = 5;
    answers: { [key: string]: string } = {};
    showResult = false;
    calculatedVibe = 'Chill Explorer';
    isLoggedIn = false;
    progress = 0;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.isLoggedIn$.subscribe(status => {
            this.isLoggedIn = status;
        });
    }

    selectOption(question: string, value: string) {
        this.answers[question] = value;
    }

    canProceed(): boolean {
        const questionKey = 'q' + this.currentStep;
        return !!this.answers[questionKey];
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateProgress();
        } else {
            this.calculateResult();
        }
    }

    updateProgress() {
        this.progress = ((this.currentStep - 1) / this.totalSteps) * 100;
    }

    calculateResult() {
        this.progress = 100;
        this.showResult = true;

        const scores: { [key: string]: number } = {
            'Chill Explorer': 0,
            'Cyber Punk': 0,
            'Cozy Minimalist': 0,
            'Retro Soul': 0
        };

        const mappings: { [key: string]: string } = {
            // Q1: Mood
            'chill': 'Chill Explorer',
            'energetic': 'Cyber Punk',
            'focused': 'Cozy Minimalist',
            'adventurous': 'Retro Soul',

            // Q2: Weekend
            'nature': 'Chill Explorer',
            'gaming': 'Cyber Punk',
            'social': 'Retro Soul',
            'creative': 'Cozy Minimalist',

            // Q3: Aesthetic
            'pastel': 'Cozy Minimalist',
            'neon': 'Cyber Punk',
            'earth': 'Chill Explorer',
            'mono': 'Retro Soul',

            // Q4: Music
            'lofi': 'Chill Explorer',
            'pop': 'Retro Soul',
            'rock': 'Cyber Punk',
            'classical': 'Cozy Minimalist',

            // Q5: Season
            'spring': 'Cozy Minimalist',
            'summer': 'Retro Soul',
            'autumn': 'Chill Explorer',
            'winter': 'Cyber Punk'
        };

        for (const key in this.answers) {
            const val = this.answers[key];
            const vibe = mappings[val];
            if (vibe) {
                scores[vibe]++;
            }
        }

        let maxScore = -1;
        let winner = 'Chill Explorer';

        for (const [vibe, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                winner = vibe;
            } else if (score === maxScore) {
                if (Math.random() > 0.5) {
                    winner = vibe;
                }
            }
        }

        this.calculatedVibe = winner;
    }
}
