const SECOND = 1000

/**
 * @param {Integer} numberOfSeconds specified number of seconds
 * @returns {Integer} Converted number of seconds
 */
export const specifyNumberOfSeconds = ({ numberOfSeconds = 0 }) => numberOfSeconds * SECOND
