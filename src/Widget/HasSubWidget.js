import { SUBWIDGET_DATA_NAME } from '../dom/const'

const { keys, values } = Object

export default superclass => class HasSubWidget extends superclass {
  initHasSubWidget () {
    this.subWidgets_ = {}
    this.usingVIDs_ = {}
  }

  dispose () {
    keys(this.subWidgets_).forEach(vid => {
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

    keys(widgets).forEach(vid => {
      if (!this.usingVIDs_[vid]) {
        this.removeSubWidget(vid).dispose()
      }
    })

    // console.log(this.subWidgets)

    this.usingVIDs_ = {}
  }

  addUsingVID (vid) {
    this.usingVIDs_[vid] = 1
  }
}
