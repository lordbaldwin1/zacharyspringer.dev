import { ImageResponse } from "next/og"

export const runtime = "edge"

async function loadGoogleFont(font: string, text: string) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${font}:wght@400&text=${encodeURIComponent(
      text
    )}`
    const css = await (await fetch(url)).text()
    const resource = /src: url\((.+)\) format\('(opentype|truetype)'\)/.exec(css)

    if (resource) {
      const response = await fetch(resource[1]!)
      if (response.status === 200) {
        return await response.arrayBuffer()
      }
    }
  } catch (error) {
    console.error('Failed to load font:', error)
  }

  throw new Error("failed to load font data")
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title")
    const text = title ? `zachary springer • ${title}` : "zachary springer • home"

    return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          fontFamily: "Geist Mono",
          padding: "40px",
          position: "relative",
        }}
      >
        <img
          src="https://zacharyspringer.dev/lordbaldwin1.jpg"
          alt="Zachary Springer profile picture"
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "90%",
          }}
        >
          <span
            style={{
              color: "#ff8c42",
              fontSize: 48,
              flexShrink: 0,
            }}
          >
            *
          </span>
          <h1
            style={{
              fontSize: 48,
              color: "#e8e8e8",
              margin: 0,
              lineHeight: 1.2,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              maxWidth: "100%",
            }}
          >
            {text}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Mono",
          data: await loadGoogleFont("Geist Mono", text),
          style: "normal",
        },
      ],
    }
    )
  } catch (error) {
    console.error('Failed to generate OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}