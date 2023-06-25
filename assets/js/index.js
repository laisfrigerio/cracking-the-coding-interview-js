const typingSpeed = 200;

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const isFirstInteraction = (index) => {
  return index === 0
}

const isEnd = (index, children) => {
  return index >= children.length
}

const isSampleText = (element) => {
  return typeof element.outerHTML === 'undefined'
}

const typing = async (snippetCode, currentElementHTML, text) => {
  for (let i = 0; i < text.length; i++) {
    currentElementHTML.innerText += text[i]
    snippetCode.appendChild(currentElementHTML);
    await sleep(50)
  }
}

const renderHTML = async (snippetCode, currentElementHTML) => {
  const text = currentElementHTML.innerText
  currentElementHTML.innerText =  ''
  await typing(snippetCode, currentElementHTML, text)
}

const renderContent = async (snippetCode, element) => {
  if (isSampleText(element)) {
    snippetCode.appendChild(element);
    return
  }

  await renderHTML(snippetCode, element)
}

const saveOriginalCode = (snippetCodeHTML) => {
  const parent = snippetCodeHTML.parentElement
  const originalCodeHTML = parent.querySelector('.code-original')
  originalCodeHTML.innerHTML = snippetCodeHTML.innerHTML
}

const sroll = (snippetCodeHTML) => {
  snippetCodeHTML.scrollTop = snippetCodeHTML.scrollHeight;
}

const typeCode = async (snippetCodeHTML, childrenHTML, index) => {
  if (isFirstInteraction(index)) {
    snippetCodeHTML.style.visibility = 'visible'
  }

  // if (isEnd(index, childrenHTML)) {
  //   return
  // }

  // if (childrenHTML.hasOwnProperty(index)) {

  //   await renderContent(snippetCodeHTML, childrenHTML[index])
  //   sroll(snippetCodeHTML)                                                                                                                           

  //   setTimeout(async () => {
  //     await typeCode(snippetCodeHTML, childrenHTML, ++index)
  //   }, typingSpeed);
  // }
}

const loadHighlight = (snippetCodeHTML) => {
  try {
    saveOriginalCode(snippetCodeHTML)
    hljs.highlightElement(snippetCodeHTML)

    const childrensHTML = Object.values(snippetCodeHTML.childNodes)

    // snippetCodeHTML.innerHTML = '';

    let index  = 0

    typeCode(snippetCodeHTML, childrensHTML, index)
  } catch (error) {
    console.log(error)
    setTimeout(loadHighlight, 50000);
  }
}

document.querySelectorAll('.code-display').forEach(snippetCode => {
  loadHighlight(snippetCode)
})

const copyToClipboard = (buttonHTML) => {
  const parent = buttonHTML.parentElement
  const text = parent.querySelector('.code-original').innerText
  navigator.clipboard.writeText(text)
  buttonHTML.classList.add('copy-to-clipboard-pressed')
}

document.querySelectorAll('.copy-to-clipboard').forEach(buttonHTML => {
  buttonHTML.addEventListener('click', () => {
    copyToClipboard(buttonHTML)
  })
})