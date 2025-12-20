import { createContext, useContext } from 'react';

export const TransitionContext = createContext();

export const usePageTransition = () => useContext(TransitionContext);