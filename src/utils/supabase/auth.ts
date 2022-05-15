import type { User } from '@supabase/supabase-js';

import type { UserTypes } from '@/types/user';

/**
 * Normalize User
 *
 * @param {User} user  - user object from supabase auth
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {UserTypes} normalize user object
 */
export const normalizeUser = (user: User): UserTypes => {
  const {
    id,
    user_metadata: { avatar_url: avatarUrl, name }
  } = user;

  return {
    avatar: avatarUrl,
    name,
    userId: id
  };
};
