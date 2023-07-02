import { MinecraftVersions } from '@/libs/minecraft'

import type { MinecraftVersion } from '@/libs/minecraft'

export function validateVersion(version: string): MinecraftVersion | '' {
  return MinecraftVersions.includes(version as MinecraftVersion)
    ? (version as MinecraftVersion)
    : ''
}
