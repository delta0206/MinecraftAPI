import { NextResponse } from 'next/server'

import { validateVersion } from '@/_libs/validation'

export const config = { runtime: 'edge' }

export async function GET(req: Request, { version }: { version: string }) {
  version = validateVersion(version)

  // TODO: return endpoint for list of Java items
  return NextResponse.json({
    msg: `There is no information yet about items for Java ${version}. I would be happy if you could add what you know to https://github.com/delta0206/MinecraftAPI`,
  })
}
