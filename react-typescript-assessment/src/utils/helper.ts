import type { User } from "../lib/types";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getUserList = (): User[] => {
  const userList = localStorage.getItem('userList');
  return userList ? JSON.parse(userList) : [];
}