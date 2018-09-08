export default superclass => class extends superclass {
  initWidgetEvent () {
    const dl = this.constructor.prototype.__decorated_widget_listeners__

    if (!dl || !dl.length) {
      return
    }

    dl.forEach(el => {
      const { type, callback } = el
      this.on(type, callback.bind(this))
    })
  }

  async triggerWidgetEvent (evt) {
    const e = await this.trigger(evt)

    if (this.disposed) {
      return
    }

    if (this.parentWidget) {
      this.parentWidget.triggerWidgetEvent(e)
    }
  }
}
