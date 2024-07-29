declare namespace NodeJS {
    export interface ProcessEnv {
        //https://medium.com/@glasshost/define-types-for-process-env-in-typescript-c89b3c8ffbb2
        [key: string]: string | undefined;
        STANDARD_USERNAME: string;
        LOCKED_OUT_USERNAME: string;
        PROBLEM_USERNAME: string;
        PERFORMANCE_GLITCH_USERNAME: string;
        ERROR_USERNAME: string;
        VISUAL_USERNAME: string;
        ALL_USERS_PASSWORD: string;
    }
}