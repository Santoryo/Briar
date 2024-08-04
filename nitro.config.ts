//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  experimental: {
    tasks: true
  },
  scheduledTasks: {
    '@daily': ['updateData']
  },
  runtimeConfig: {
    pbUser: process.env.PB_USER,
    pbPass: process.env.PB_PASS,
    pbURL: process.env.PB_URL,
    staticData: process.env.STATIC_DATA
  }
});
