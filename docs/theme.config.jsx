/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  project: {
    link: 'https://github.com/delta0206/MinecraftAPI',
  },
  docsRepositoryBase: 'https://github.com/delta0206/MinecraftAPI/blob/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - MinecraftAPI',
    }
  },
  logo: <span>Minecraft API</span>,
  footer: {
    text: (
      <a href='https://github.com/delta0206' target='_Blank' rel='noopener noreferrer'>
        Created by delta0206
      </a>
    ),
  },
  gitTimestamp({ timestamp }) {
    return <>Last updated on {new Date(timestamp).toLocaleDateString()}</>
  },
}
