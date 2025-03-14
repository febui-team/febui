const map = new Map()
/**
 * 生成对应标识下唯一ID
 * @param {string} name - ID标识
 * @returns {number} id
 */
export const generateId = (name: string): number => {
  const id = map.has(name) ? map.get(name) + 1 : 0
  map.set(name,id)
  return id
}