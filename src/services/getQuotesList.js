

  export default function getQuotesList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          quoteID: 666,
          quotation: 'hello world, this is a quote',
          author: 'You me and everyone'
        })
      }, 1500)
    })
  }
