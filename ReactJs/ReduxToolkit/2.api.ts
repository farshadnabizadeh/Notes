// src/types/api.ts
export interface TokenState {
  accessToken: string | null
  refreshToken: string | null
  expiration: number | null  // timestamp in ms
  userId: string | null
}

export interface SetTokenPayload {
  accessToken: string
  refreshToken: string
  expiration: number
  userId: string
}
