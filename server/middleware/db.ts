export default defineEventHandler(async (event) => {
  const { DB } = event.context.cloudflare.env
  console.log("🚀 ~ defineEventHandler ~ DB:", DB)
})

