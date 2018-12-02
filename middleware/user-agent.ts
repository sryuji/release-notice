export default function(context): void {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
