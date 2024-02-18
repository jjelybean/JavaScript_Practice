var quoteList = ['lam m nmn na', 'love kita', 'cute mo', 'pag nagagalit k']


var quote= document.querySelector('#quote')

function printQuote(){
    console.log(quote.innerText) //innerHTML to display elements
}

// changes/generates new quote
function changeQuoteText(){
    var randomIndex = Math.floor(Math.random() * quoteList.length)
   quote.innerText= quoteList[randomIndex]

}

function test(){
    console.log(Math.floor(Math.random() * quoteList.length))

}

var randomIndex = Math.floor(Math.random() * quoteList.length)

// variable for print button
var printButton = document.querySelector('#printButton')

// when print button is clicked generates new quote
printButton.addEventListener('click', changeQuoteText)
