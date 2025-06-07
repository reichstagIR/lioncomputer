/* eslint-disable unicorn/prevent-abbreviations */

namespace NodeJS {
    interface ProcessEnv {
        NEXTAUTH_SECRET: string;
        NEXTAUTH_SIGNIN: string;
        NEXTAUTH_SIGNOUT: string;
        DATABASE_URL: string;
    }
}
