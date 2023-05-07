import { NextResponse } from 'next/server'

export const config = { runtime: 'edge' }

export async function GET() {
  // TODO: return endpoint for list of Bedrock versions
  return NextResponse.json({
    msg: 'There is no information yet about BE. I would be happy if you could add what you know to https://github.com/delta0206/MinecraftAPI',
  })
}
