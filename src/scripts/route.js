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
