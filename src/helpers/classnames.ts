type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([classname, bol]) => Boolean(bol))
      .map(([classname, bol]) => classname),
    ...additional,
  ].join(' ')
}
