const date = new Date()

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const today = days[date.getDay()-1]



const updateTime = () => {
  const date = new Date()
  const utcTime = date.toISOString().substr(11,8);
  timeUtc.textContent = utcTime
}

const todayTag = document.getElementById('today')
const timeUtc = document.getElementById('utc')

todayTag.textContent=today

setInterval(updateTime,1000)
