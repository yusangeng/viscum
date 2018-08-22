export default superclass => class HasSubWidget extends superclass {
  initHasSubWidget () {
    this.subWidgets_ = []
    this.usingVID_ = []
  }

  dispose () {
    Object.keys(this.subWidgets_).forEach(vid => {
      const widget = this.subWidgets_[vid]
      widget.dispose()
    })

    delete this.subWidgets_
  }

  subWidget (vid) {
    return this.subWidgets_[vid]
  }

  get subWidgets () {
    return Object.assign({}, this.subWidgets_)
  }

  addSubWidget (vid, widget) {
    const prev = this.subWidgets_[vid]

    if (prev) prev.dispose()

    this.subWidgets_[vid] = widget
  }

  removeSubWidget (vid) {
    const prev = this.subWidgets_[vid]

    if (prev) prev.dispose()
    delete this.subWidgets_[vid]
  }

  startUpdateSubWidgets () {
  }

  stopUpdateSubWidgets () {
    const widgets = this.subWidgets

    Object.keys(widgets).forEach(vid => {
      if (!this.usingVID_.includes(vid)) {
        this.removeSubWidget(vid)
      }
    })

    // console.log(this.subWidgets)

    this.usingVID_ = []
  }

  addUsingVID (vid) {
    this.usingVID_.push(vid)
  }
}
