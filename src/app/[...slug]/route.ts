import { NextResponse } from 'next/server'

export const GET = async (req: Request, { params: { slug } }: { params: { slug: string[] } }) => {
  const queries = slug.join(', ')
  return NextResponse.json({
    msg: `There is no information yet about [${queries}] queries. I would be happy if you could add what you know to https://github.com/delta0206/MinecraftAPI`,
  })
}
