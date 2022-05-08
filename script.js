const button = document.querySelector('button')
const nums = document.querySelector('.nums')
const rate = document.querySelector('.rate')
const thanks = document.querySelector('.thanks')
const selected = document.querySelector('.selected')

nums.addEventListener('click', function (e) {
    if (e.target.matches('span')) {
        numchange(e.target)
    }
})

function numchange(num) {
    nums.querySelector('.active')?.classList.remove('active')
    num.classList.add('active')
}

function submitted() {
    if (nums.querySelector('.active')){
        rate.classList.add('hide')
        thanks.classList.add('show')
        selected.innerHTML = nums.querySelector('.active').innerHTML

    } else (
        alert('Rate us before submit')
    )
}