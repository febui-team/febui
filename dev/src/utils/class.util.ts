export const classnames = function (...v: (string | undefined | false)[]) {
  const buffer: string[] = []
  const classnames = {
    add(...v: (string | undefined | false)[]) {
      v.forEach((c) => {
        if (!!c) buffer.push(c)
      })
    },
    toString() {
      return buffer.join(' ')
    }
  }
  classnames.add(...v)
  return classnames as (string & typeof classnames)
}