import { MinecraftVersions } from '@/_libs/minecraft'

import type { MinecraftVersion } from '@/_libs/minecraft'

export function validateVersion(version: string): MinecraftVersion | '' {
  return MinecraftVersions.includes(version as MinecraftVersion)
    ? (version as MinecraftVersion)
    : ''
}
