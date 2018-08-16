export default function on$ (type, sel) {
  return function on$ (target, key, descriptor) {
    if (!target.__decorated_listeners__) {
      target.__decorated_listeners__ = []
    }

    target.__decorated_listeners__.push({
      type,
      sel,
      callback: descriptor.value
    })

    return descriptor
  }
}
