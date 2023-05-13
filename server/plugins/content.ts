import { Node as UnistNode } from 'unist'

interface Node extends UnistNode {
  value: 'text' | string
  children?: Node[]
  tag?: 'style' | string
}

function toText (root: Node) {
  let text = ''

  function recurse (node: Node) {
    if (node.type === 'text') {
      text += ` ${node.value}`
    }

    if (node.children && node.tag !== 'style') {
      for (const child of node.children) {
        recurse(child)
      }
    }
  }

  recurse(root)
  return text
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.plainText = toText(file.body)
    }
  })
})
