/**
 * Application state: to show interfaces logically.
 */
export type AppState = {
    isSignedUp: () => boolean;
    userId: string;
    userName: string;
    email: string;
    orgId: string;
    orgName: string;
    currentBoardId: string;
    currentBoardName: string;
}

export interface AppStateInput {
    userId?: string;
    userName?: string;
    email?: string;
    orgId?: string;
    orgName?: string;
    currentBoardId?: string;
    currentBoardName?: string;
}

export type LocalQueries = {
    appState: AppState;
}

export interface TicketProps {
    id: string;
    name: string;
    description?: string;
    status: string;
    visible: boolean;
}



