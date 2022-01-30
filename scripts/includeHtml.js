const reusableHtml = () => {
  const init = () => {
    $(function () {
      var includes = $('[data-include]')
      $.each(includes, function () {
        var file = '/projektJS/html/' + $(this).data('include') + '.html'
        $(this).load(file)
      })
    });
  }
  
  init();
};

export default reusableHtml;
