export const r3 = "[Filtered]";
const deny = [
    "forwarded",
    "-ip",
    "remote-",
    "via",
    "-user"
];
export const n3 = [
    "auth",
    "token",
    "secret",
    "session",
    "password",
    "passwd",
    "pwd",
    "key",
    "jwt",
    "bearer",
    "sso",
    "saml",
    "csrf",
    "xsrf",
    "credentials",
    "sid",
    "identity",
    "set-cookie",
    "cookie"
];
export function GD(e) {
    if (e === true) {
        return {
            userInfo: true,
            cookies: true,
            httpHeaders: {
                request: true,
                response: true
            },
            httpBodies: [
                "incomingRequest",
                "outgoingRequest",
                "incomingResponse",
                "outgoingResponse"
            ],
            urlQueryParams: true,
            graphQL: {
                document: true,
                variables: true
            },
            genAI: {
                inputs: true,
                outputs: true
            },
            databaseQueryData: true,
            stackFrameVariables: true,
            frameContextLines: 7
        };
    }
    return {
        userInfo: false,
        cookies: {
            deny
        },
        httpHeaders: {
            request: {
                deny
            },
            response: {
                deny
            }
        },
        httpBodies: [],
        urlQueryParams: {
            deny
        },
        graphQL: {
            document: true,
            variables: true
        },
        genAI: {
            inputs: false,
            outputs: false
        },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7
    };
}
