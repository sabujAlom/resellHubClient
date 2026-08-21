"use client";
import { createContext, useEffect, useState } from 'react';
import { authClient } from '../lib/auth-client';
import { registerUser, loginUser, loginWithGoogle, logoutUser, updateProfile } from '../services/client/authService';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor session change using Better Auth React hook
  const { data: sessionData, isPending, refetch } = authClient.useSession();

  useEffect(() => {
  if (isPending) return;

  if (sessionData?.user) {
    const currentUser = sessionData.user;

    console.log("Google/Better Auth user:", currentUser);
    console.log("Profile image:", currentUser.image);

    setUser(currentUser);

    axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/jwt`,
      {},
      {
        withCredentials: true
      }
    )
    .then((response) => {
      if (response.data?.token) {
        localStorage.setItem('access-token', response.data.token);
      }
    })
    .catch((err) => {
      console.error("JWT retrieval error", err);
    })
    .finally(() => {
      setLoading(false);
    });

  } else {
    setUser(null);
    localStorage.removeItem('access-token');
    setLoading(false);
  }
}, [sessionData, isPending]);

  const createUser = async (email, password, name, role, phone, location, image) => {
    setLoading(true);
    try {
      const response = await registerUser(email, password, name, role, phone, location, image);
      await refetch();
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      const response = await loginUser(email, password);
      await refetch();
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const googleSignIn = async () => {
    setLoading(true);
    try {
      const response = await loginWithGoogle();
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      const response = await logoutUser();
      setUser(null);
      localStorage.removeItem('access-token');
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const updateUserProfile = async (name, photo) => {
    const response = await updateProfile(name, photo);
    await refetch();
    return response;
  };

  const authInfo = {
    user,
    loading: loading || isPending,
    createUser,
    signIn: signInUser,
    googleSignIn,
    logOut,
    updateUserProfile,
    refetchSession: refetch
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
