/**
 * The isEncoded() function checks the @str is encoded or not, if so return true. Otherwise false
 * @param {string} str
**/
export const isEncoded = (str) => typeof str == "string" && decodeURIComponent(str) !== str

/**
 * The decode() function function decodes a Uniform Resource Identifier (URI) 
 * component previously created by encodeURIComponent or by a similar routine.
 * @param {string} str
**/
export const decode = (str) => isEncoded(str) ? decodeURIComponent(str) : str