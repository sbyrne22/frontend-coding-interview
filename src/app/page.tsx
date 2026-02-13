'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function Home() {


  return (
    <div className={styles.signInContent}>
      <div className={styles.headingSection}>
        {/* Logo Here */}
        <h1 className={styles.headline}>Sign in to your account</h1>
      </div>
      <form>
        <section>
          <div className={styles.labelContainer}>
            <label htmlFor="username">Username</label>
          </div>
          <input type="email" id="username" name="user_name" placeholder=" " autoComplete="username" required/>
        </section>
        <section>
          <div className={styles.labelContainer}>
            <label htmlFor="current-password">Password</label>
            <span><a href="#">Forgot Password?</a></span>
          </div>
          <input type="password" pattern=".{8,}" id="current-password" name="current-password" placeholder=" " autoComplete="current-password" aria-describedby="password-constraints" required/>
        </section>
        <button className={styles.submitCTA} type="submit" id="signin">Sign in</button>
      </form>
    </div>
  );
}
