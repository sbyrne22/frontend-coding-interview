'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/Logo";
import styles from "./page.module.css";

export default function Home() {

  const { signin } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.SubmitEvent) => {
      e.preventDefault();
      signin(email);
      router.push('/photos');
  };

  return (
    <div className={styles.signInContent}>
      <div className={`${styles.headingSection} flexColCenter`}>
        <Logo />
        <h1 className={styles.headline}>Sign in to your account</h1>
      </div>
      <form className={styles.signInForm} onSubmit={handleSignIn} action="" method="post" id="form" name="form">
        <section className={`${styles.inputSection} flexColCenter`}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="username">Username</label>
          </div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="username" name="user_name" placeholder=" " autoComplete="username" required/>
        </section>
        <section className={`${styles.inputSection} flexColCenter`}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="current-password">Password</label>
            <span><a href="#">Forgot Password?</a></span>
          </div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} pattern=".{8,}" id="current-password" name="current-password" placeholder=" " autoComplete="current-password" aria-describedby="password-constraints" required/>
        </section>
        <button className={styles.submitCTA} type="submit" id="signin">Sign in</button>
      </form>
    </div>
  );
}
