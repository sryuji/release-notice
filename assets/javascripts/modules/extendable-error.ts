abstract class ExtendableError extends Error {
  public constructor(message, options = { base: null }) {
    if (message && typeof message === 'object') {
      options = message
      message = null
    }
    super(message)
    if (options['base']) this.stack = options['base'].stack
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export default ExtendableError
