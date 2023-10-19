import { Injectable } from '@angular/core';
import {  AngularFireAuth } from "@angular/fire/compat/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  isUserLoggedIn() {
    return this.afAuth.authState; // Returns an Observable of the user's authentication state
  }
}
