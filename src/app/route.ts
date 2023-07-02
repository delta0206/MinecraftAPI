import { NextResponse } from 'next/server'

export const runtime = 'edge'

export const GET = async () => {
  return NextResponse.json({
    endpoints: [
      {
        name: 'Java',
        url: `${process.env.NEXT_PUBLIC_ROOT_URL}/java`,
      },
      {
        name: 'BE',
        url: `${process.env.NEXT_PUBLIC_ROOT_URL}/be`,
      },
    ],
  })
}
