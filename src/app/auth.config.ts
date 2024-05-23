import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfigGoogle: AuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/index.html',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
};

export const authConfigLinkedIn: AuthConfig = {
  issuer: 'https://www.linkedin.com',
  clientId: 'YOUR_LINKEDIN_CLIENT_ID',
  redirectUri: window.location.origin + '/index.html',
  scope: 'r_liteprofile r_emailaddress w_member_social',
  strictDiscoveryDocumentValidation: false
};
