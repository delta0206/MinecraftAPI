import { NextResponse } from 'next/server'

import { validateVersion } from '@/libs/validation'

export const runtime = 'edge'

export async function GET(req: Request, { params: { version } }: { params: { version: string } }) {
  version = validateVersion(version)

  // TODO: return endpoint for list of Java versions
  return NextResponse.json({
    msg: `There is no information yet about Java ${version}. I would be happy if you could add what you know to https://github.com/delta0206/MinecraftAPI`,
  })
}
