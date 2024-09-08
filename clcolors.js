/**
 * An object containing ANSI color codes for terminal text styling.
 * Each property represents a color and contains the corresponding ANSI escape code.
 *
 * @constant
 * @type {Object}
 * @property {string} red - ANSI escape code for red text.
 * @property {string} green - ANSI escape code for green text.
 * @property {string} yellow - ANSI escape code for yellow text.
 * @property {string} blue - ANSI escape code for blue text.
 */
export default colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
};
