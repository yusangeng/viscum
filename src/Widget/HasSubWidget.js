import { SUBWIDGET_DATA_NAME } from '../dom/const'

const { values } = Object

export default superclass => class HasSubWidget extends superclass {
  initHasSubWidget () {
    this.subWidgets_ = {}
    this.usingVID_ = []
  }

  dispose () {
    Object.keys(this.subWidgets_).forEach(vid => {
      const widget = this.subWidgets_[vid]
      widget.dispose()
    })

    delete this.subWidgets_
    super.dispose()
  }

  subWidget (vid) {
    return this.subWidgets_[vid]
  }

  widgetByName (name) {
    return values(this.subWidgets_).find(el => el[SUBWIDGET_DATA_NAME] === name)
  }

  $ (name) {
    return this.widgetByName(name)
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
    const widget = this.subWidgets_[vid]

    delete this.subWidgets_[vid]

    return widget
  }

  startUpdateSubWidgets () {
  }

  stopUpdateSubWidgets () {
    const widgets = this.subWidgets

    Object.keys(widgets).forEach(vid => {
      if (!this.usingVID_.includes(vid)) {
        this.removeSubWidget(vid).dispose()
      }
    })

    // console.log(this.subWidgets)

    this.usingVID_ = []
  }

  addUsingVID (vid) {
    this.usingVID_.push(vid)
  }
}
