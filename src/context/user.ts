import { createContext, useContext } from 'react';

import { Maybe } from '@/types/general';
import type { UserTypes } from '@/types/user';

/**
 * User Context
 *
 * @since 0.0.0
 */
const UserContext = createContext<Maybe<UserTypes>>(undefined);

/**
 * Use User
 *
 * @returns {UserTypes} user object
 * @since 0.0.0
 */
export const useUser = (): UserTypes => {
  const contextValue = useContext(UserContext);

  if (!contextValue) {
    throw new Error(
      'useUser must be used within a withAuthenticatedPageWrapper'
    );
  }

  return contextValue;
};

export default UserContext;
