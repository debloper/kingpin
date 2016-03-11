page('/dashboard', function () {
  fetch('views/dashboard.htm')
  .then(function (response) {
    return response.text()
  }).then(function (template) {
    var templateFn = doT.template(template)
    $("#content").html(templateFn(location.pathname))
  })
})

$('a[href="/dashboard"]').click(function (e) {
  page('/dashboard')
  e.preventDefault()
})

page('/clusters', function () {
  fetch('views/clusters.htm')
  .then(function (response) {
    return response.text()
  }).then(function (template) {
    var templateFn = doT.template(template)
    $("#content").html(templateFn(location.pathname))
  })
})

$('a[href="/clusters"]').click(function (e) {
  page('/clusters')
  e.preventDefault()
})

page('/hosts', function () {
  fetch('views/hosts.htm')
  .then(function (response) {
    return response.text()
  }).then(function (template) {
    var templateFn = doT.template(template)
    $("#content").html(templateFn(location.pathname))
  })
})

$('a[href="/hosts"]').click(function (e) {
  page('/hosts')
  e.preventDefault()
})

page('/storage', function () {
  fetch('views/storage.htm')
  .then(function (response) {
    return response.text()
  }).then(function (template) {
    var templateFn = doT.template(template)
    $("#content").html(templateFn(location.pathname))
  })
})

$('a[href="/storage"]').click(function (e) {
  page('/storage')
  e.preventDefault()
})

page('/admin', function () {
  fetch('views/admin.htm')
  .then(function (response) {
    return response.text()
  }).then(function (template) {
    var templateFn = doT.template(template)
    $("#content").html(templateFn(location.pathname))
  })
})

$('a[href="/admin"]').click(function (e) {
  page('/admin')
  e.preventDefault()
})