// index.html 페이지
document.body.style.height = '100vh'
document.body.style.backgroundPosition = 'center center'
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundRepeat = 'no-repeat'

const myRadiusElement = document.getElementById('myRadiusElement')
if (myRadiusElement) {
  myRadiusElement.style.borderRadius = '150px'
}

const myContainerElement = document.getElementById('myContainerElement')
if (myContainerElement) {
  myContainerElement.style.textAlign = 'center'
}

const fadeInDownKeyframes = [
  { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
  { opacity: 1, transform: 'translateZ(0)' },
]

const fadeInUpKeyframes = [
  { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
  { opacity: 1, transform: 'translateZ(0)' },
]

const anime = document.getElementById('anime')
if (anime) {
  anime.style.position = 'relative'
  anime.animate(fadeInDownKeyframes, {
    duration: 1200,
    fill: 'forwards',
  })
}

const anime2 = document.getElementById('anime2')
if (anime2) {
  anime2.style.position = 'relative'
  anime2.animate(fadeInDownKeyframes, {
    duration: 1400,
    fill: 'forwards',
  })
}

const anime3 = document.getElementById('anime3')
if (anime3) {
  anime3.style.position = 'relative'
  anime3.animate(fadeInDownKeyframes, {
    duration: 1600,
    fill: 'forwards',
  })
}

const anime4 = document.getElementById('anime4')
if (anime4) {
  anime4.style.position = 'relative'
  anime4.animate(fadeInUpKeyframes, {
    duration: 1600,
    fill: 'forwards',
  })
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 타이핑 효과 구현
const text = '안녕하세요, 우리 미정 팀을 소개하겠습니다.' // 표시할 문자열
const typingSpeed = 100 // 타이핑 속도 (밀리초 단위)
let charIndex = 0
const typingElement = document.getElementById('typingText')

function type() {
  if (charIndex < text.length) {
    typingElement.textContent += text.charAt(charIndex)
    charIndex++
    setTimeout(type, typingSpeed)
  }
}
// 타이핑 효과 시작
type()

// 다이얼로그 열기
const dialogElem = document.getElementById('dialog')
const showBtn = document.querySelector('.show')
const closeBtn = document.querySelector('.close')

showBtn.addEventListener('click', () => {
  dialogElem.showModal()
})

closeBtn.addEventListener('click', () => {
  dialogElem.close()
})

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 스크롤 이벤트

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면에 들어옴
        entry.target.classList.add('fade-in')
      } else {
        // 화면에서 나감
        entry.target.classList.remove('fade-in')
      }
    })
  },
  // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
  { threshold: 0.1 }
)

// 관찰 대상 설정
const targetElements = document.querySelectorAll('.fade-wrap')
targetElements.forEach((element) => {
  observer.observe(element)
})
