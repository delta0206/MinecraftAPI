import { NextResponse } from 'next/server'

import { MinecraftVersions } from '@/_libs/minecraft'

export const runtime = 'edge'

export async function GET() {
  return NextResponse.json({
    endpoints: MinecraftVersions.map((version) => ({
      name: version,
      url: `${process.env.NEXT_PUBLIC_ROOT_URL}/api/java/${version}`,
    })),
  })
}
