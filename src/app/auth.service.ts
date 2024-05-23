import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { authConfigGoogle, authConfigLinkedIn } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInAcc(): boolean {
    const userData = localStorage.getItem('userData');
    return userData !== null;
  }

  login(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  logoutAcc(): void {
    localStorage.removeItem('userData');
  }

  getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

/*Below is the code to login through gmail or linkedin Profile*/

  constructor(private oauthService: OAuthService) { }

  public configureGoogleAuth(): void {
    this.oauthService.configure(authConfigGoogle);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public configureLinkedInAuth(): void {
    this.oauthService.configure(authConfigLinkedIn);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public loginWithGoogle(): void {
    this.configureGoogleAuth();
    this.oauthService.initImplicitFlow();
  }

  public loginWithLinkedIn(): void {
    this.configureLinkedInAuth();
    this.oauthService.initImplicitFlow();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    // if (!claims) return null;
    return claims['name'];
  }
}
