import { NextResponse } from 'next/server'

import { validateVersion } from '@/_libs/validation'

export const runtime = 'edge'

export async function GET(req: Request, { version, name }: { version: string; name: string }) {
  version = validateVersion(version)

  // TODO: return item information for Java
  return NextResponse.json({
    msg: `There is no information yet about ${name} for Java ${version}. I would be happy if you could add what you know to https://github.com/delta0206/MinecraftAPI`,
  })
}
