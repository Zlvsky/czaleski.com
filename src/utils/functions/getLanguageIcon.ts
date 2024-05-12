const jsIcon = '/icons/codelangs/js.svg'
const jsonIcon = '/icons/codelangs/json.svg'
const tailwindIcon = '/icons/codelangs/tailwind.svg'
const tsIcon = '/icons/codelangs/ts.svg'
const cssIcon = '/icons/codelangs/css.svg'
const htmlIcon = '/icons/codelangs/html.svg'

export const getLanguageIcon = (language: string) => {
  switch (language) {
    case 'js':
      return jsIcon
    case 'json':
      return jsonIcon
    case 'tailwindIcon':
      return tailwindIcon
    case 'ts':
      return tsIcon
    case 'css':
      return cssIcon
    case 'html':
      return htmlIcon
    default:
      return undefined
  }
}
