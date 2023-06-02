import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  // TODO: return a list of Bedrock version endpoints
  return NextResponse.json({
    msg: 'There is no information yet about BE. I would be happy if you could add what you know to https://github.com/delta0206/MinecraftAPI',
  })
}
