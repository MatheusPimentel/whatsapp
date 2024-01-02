export default {
  /**
   * @param fieldHidden
   * @returns {Skeleton}
   */
  fieldHidden (fieldHidden = true) {
    return this.setLayout({ fieldHidden })
  }
}
