import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getTheme() {
  return localStorage.getItem('theme') || 'light';
}

export function setTheme(theme) {
  localStorage.setItem('theme', theme);
}