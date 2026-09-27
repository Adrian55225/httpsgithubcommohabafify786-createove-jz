import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { SubscriptionPlan, SubscriptionState } from '../types/subscription';
import { subscriptionTiers } from '../data/subscriptionTiers';

interface ConversationCredits {
  [conversationId: number]: number;
}

interface SubscriptionContextType {
  subscription: SubscriptionState;
  subscribe: (plan: SubscriptionPlan, paymentVerified: boolean) => boolean;
  isActive: () => boolean;
  checkSubscription: () => boolean;
  canSendMessage: (conversationId: number) => boolean;
  recordMessage: (conversationId: number) => void;
  getUserMessageCount: (conversationId: number) => number;
  decrementMessages: () => void;
  getExpiryDate: () => string | null;
  getRemainingDays: () => number;
  getRemainingMessages: () => number;
  isUserOnline: (userId: number) => boolean;
  clearSubscription: () => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

const SUB_KEY = 'heartsync_sub';
const CREDITS_KEY = 'heartsync_credits';
const GLOBAL_CREDITS_KEY = 'heartsync_global_credits';
const FREE_MESSAGES = 3;

const DEFAULT_STATE: SubscriptionState = {
  isSubscribed: false,
  plan: null,
  expiresAt: null,
};

export const SubscriptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [subscription, setSubscription] = useState<SubscriptionState>(() => {
    try {
      const stored = localStorage.getItem(SUB_KEY);
      if (!stored) return DEFAULT_STATE;
      
      const parsed = JSON.parse(stored) as SubscriptionState;
      
      if (!parsed.isSubscribed || !parsed.expiresAt || !parsed.plan) {
        localStorage.removeItem(SUB_KEY);
        return DEFAULT_STATE;
      }
      
      const expiryDate = new Date(parsed.expiresAt);
      const now = new Date();
      
      if (isNaN(expiryDate.getTime()) || expiryDate <= now) {
        localStorage.removeItem(SUB_KEY);
        return DEFAULT_STATE;
      }
      
      return parsed;
    } catch {
      localStorage.removeItem(SUB_KEY);
      return DEFAULT_STATE;
    }
  });

  const [credits, setCredits] = useState<ConversationCredits>(() => {
    try {
      const stored = localStorage.getItem(CREDITS_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [globalRemaining, setGlobalRemaining] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(GLOBAL_CREDITS_KEY);
      if (stored !== null) {
        const val = parseInt(stored, 10);
        return isNaN(val) ? FREE_MESSAGES : Math.min(val, FREE_MESSAGES);
      }
    } catch { /* empty */ }
    return FREE_MESSAGES;
  });

  useEffect(() => {
    if (subscription.isSubscribed && subscription.expiresAt && subscription.plan) {
      localStorage.setItem(SUB_KEY, JSON.stringify(subscription));
    } else {
      localStorage.removeItem(SUB_KEY);
    }
  }, [subscription]);

  useEffect(() => {
    localStorage.setItem(CREDITS_KEY, JSON.stringify(credits));
  }, [credits]);

  useEffect(() => {
    localStorage.setItem(GLOBAL_CREDITS_KEY, globalRemaining.toString());
  }, [globalRemaining]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (subscription.isSubscribed && subscription.expiresAt) {
        const expiryDate = new Date(subscription.expiresAt);
        if (expiryDate <= new Date()) {
          setSubscription(DEFAULT_STATE);
        }
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [subscription]);

  const subscribe = useCallback((plan: SubscriptionPlan, paymentVerified: boolean): boolean => {
    if (!paymentVerified) {
      console.warn('Subscription rejected: Payment not verified');
      return false;
    }
    
    const tier = subscriptionTiers.find((t) => t.id === plan);
    if (!tier) {
      console.warn('Subscription rejected: Invalid plan');
      return false;
    }
    
    const now = new Date();
    const expiresAt = new Date(now.getTime() + tier.durationDays * 24 * 60 * 60 * 1000);
    
    const newState: SubscriptionState = {
      isSubscribed: true,
      plan,
      expiresAt: expiresAt.toISOString(),
    };
    
    setSubscription(newState);
    setGlobalRemaining(FREE_MESSAGES);
    
    return true;
  }, []);

  const clearSubscription = useCallback(() => {
    setSubscription(DEFAULT_STATE);
    localStorage.removeItem(SUB_KEY);
  }, []);

  const isActive = useCallback((): boolean => {
    if (!subscription.isSubscribed || !subscription.expiresAt || !subscription.plan) {
      return false;
    }
    
    const expiryDate = new Date(subscription.expiresAt);
    if (isNaN(expiryDate.getTime()) || expiryDate <= new Date()) {
      return false;
    }
    
    return true;
  }, [subscription]);

  const checkSubscription = useCallback((): boolean => {
    return isActive();
  }, [isActive]);

  const canSendMessage = useCallback((conversationId: number): boolean => {
    if (isActive()) return true;
    const used = credits[conversationId] || 0;
    return used < FREE_MESSAGES;
  }, [isActive, credits]);

  const recordMessage = useCallback((conversationId: number) => {
    if (!isActive()) {
      setCredits((prev) => ({
        ...prev,
        [conversationId]: (prev[conversationId] || 0) + 1,
      }));
    }
  }, [isActive]);

  const getUserMessageCount = useCallback((conversationId: number): number => {
    return credits[conversationId] || 0;
  }, [credits]);

  const decrementMessages = useCallback(() => {
    if (!isActive()) {
      setGlobalRemaining((prev) => Math.max(0, prev - 1));
    }
  }, [isActive]);

  const getExpiryDate = useCallback((): string | null => {
    return subscription.expiresAt;
  }, [subscription]);

  const getRemainingDays = useCallback((): number => {
    if (!subscription.expiresAt) return 0;
    const diff = new Date(subscription.expiresAt).getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / (24 * 60 * 60 * 1000)));
  }, [subscription]);

  const getRemainingMessages = useCallback((): number => {
    if (isActive()) return Infinity;
    return Math.max(0, globalRemaining);
  }, [isActive, globalRemaining]);

  const isUserOnline = useCallback((_userId: number): boolean => {
    return isActive();
  }, [isActive]);

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        subscribe,
        isActive,
        checkSubscription,
        canSendMessage,
        recordMessage,
        getUserMessageCount,
        decrementMessages,
        getExpiryDate,
        getRemainingDays,
        getRemainingMessages,
        isUserOnline,
        clearSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export function useSubscription(): SubscriptionContextType {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error('useSubscription must be used within SubscriptionProvider');
  return ctx;
}
