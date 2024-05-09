const jsIcon = '/icons/codelangs/js.svg'
const jsonIcon = '/icons/codelangs/json.svg'
const tailwindIcon = '/icons/codelangs/tailwind.svg'
const tsIcon = '/icons/codelangs/ts.svg'
const cssIcon = '/icons/codelangs/css.svg'
const htmlIcon = '/icons/codelangs/html.svg'
// https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_typescript.svg?short_path=d02aa28

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
