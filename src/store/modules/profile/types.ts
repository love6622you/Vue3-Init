export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface ProfileState {
  user?: User | null;
  error: boolean;
}
