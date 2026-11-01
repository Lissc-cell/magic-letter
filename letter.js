const book = document.getElementById('book')
const letter = document.getElementById('letter')
const input = document.getElementById('input')
const file = document.getElementById('file')
const openBtn = document.getElementById('open')

let text = '亲爱的你：\n\n遇见你之后，代码都有了温度。\n—— 匿名'

// 文件导入
file.addEventListener('change', e => {
  const f = e.target.files[0]
  if (!f) return
  const reader = new FileReader()
  reader.onload = () => input.value = reader.result
  reader.readAsText(f)
})

function typeWrite(str) {
  letter.textContent = ''
  let i = 0
  const timer = setInterval(() => {
    letter.textContent += str[i++] || ''
    if (i >= str.length) clearInterval(timer)
  }, 45)
}

openBtn.addEventListener('click', () => {
  text = input.value.trim() || text
  book.classList.add('open')
  setTimeout(() => typeWrite(text), 900)
  startHearts()
})