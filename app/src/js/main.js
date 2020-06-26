document.getElementsByClassName('hostname')[0].innerText =
  require('os').hostname

document.getElementsByClassName('username')[0].innerText =
  require('os').userInfo().username

document.getElementsByClassName('platform')[0].innerText =
  require('os').platform

setInterval(() => {
  document.getElementsByClassName('cpu')[0].innerText =
    require('os').loadavg()

  document.getElementsByClassName('mem')[0].innerText =
    [
      require('os').freemem(),
      require('os').totalmem() + (' (' + require('os').freemem() / require('os').totalmem() * 100 + '%)')
    ].join('/')
}, 100)
