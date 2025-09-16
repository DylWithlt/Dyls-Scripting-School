import { SatoriOptions } from "satori/wasm"
import { GlobalConfiguration } from "../quartz/cfg"
import { SocialImageOptions, UserOpts } from "../quartz/util/og"
import { QuartzPluginData } from "../quartz/plugins/vfile"

export const customImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,
  fonts,
  fileData,
}: {
  cfg: GlobalConfiguration
  userOpts: UserOpts
  title: string
  description: string
  fonts: SatoriOptions["fonts"]
  fileData: QuartzPluginData
}) => {
  const fontBreakPoint = 24
  const useSmallerFont = title.length > fontBreakPoint
  const { colorScheme } = userOpts

  // Colors from config
  const colors = cfg.theme.colors[colorScheme]

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: colors.light,
        padding: "3rem",
        fontFamily: fonts[0].name,
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          display: "flex",
          width: "1.2rem",
          backgroundColor: colors.tertiary,
          marginRight: "3rem",
          borderRadius: "8px",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            marginBottom: "2.5rem",
          }}
        >
          <img
            src="https://dylwithlt.github.io/DylsScriptingArticles/static/icon.png"
            width={80}
            height={80}
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              color: colors.dark,
              fontSize: useSmallerFont ? "3.5rem" : "4.2rem",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              display: "flex",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                color: colors.gray || "#666666",
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: 1.4,
                maxWidth: "90%",
              }}
            >
              {description}
            </div>
          </div>
        )}

        {/* Bottom decorative element */}
        <div
          style={{
            display: "flex",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "6px",
              backgroundColor: colors.tertiary,
              borderRadius: "3px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
