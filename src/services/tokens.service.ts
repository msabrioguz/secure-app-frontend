export class TokenService {
  static getLocalAccessToken(): string | null {
    return localStorage.getItem('token');
  }
  static getLocalRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }
  static updateLocalAccessToken(token: string): void {
    localStorage.setItem('token', token);
  }
  static updateLocalRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }
  static removeTokens(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
