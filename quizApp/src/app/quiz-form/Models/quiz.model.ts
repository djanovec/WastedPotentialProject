export interface Quiz {
    quizTitle: string;
    quizDescription: string;
    quizInstructions: string;
    quizQuestions: Array<Questions>;
    correctAnswers: string;

}

export interface Questions {
    type?: string;
    prompt?: string;
    choices?: Array<any>;
    correct?: string;
}